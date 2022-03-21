// Copyright (c) 2021-2022. Heusala Group <info@heusalagroup.fi>. All rights reserved.

import {
    GetMapping,
    RequestHeader,
    RequestMapping,
    PostMapping,
    RequestBody,
    RequestParam
} from "../fi/hg/core/Request";
import { ReadonlyJsonObject } from "../fi/hg/core/Json";
import { ResponseEntity } from "../fi/hg/core/request/ResponseEntity";
import { LogService } from "../fi/hg/core/LogService";
import { EmailTokenDTO } from "../fi/hg/backend/types/EmailTokenDTO";
import { ErrorDTO } from "../fi/hg/backend/types/ErrorDTO";
import { EmailAuthController } from "../fi/hg/backend/EmailAuthController";
import { RequestParamValueType } from "../fi/hg/core/request/types/RequestParamValueType";
import { AuthEmailQueryParam } from "../fi/hg/auth/email/types/AuthEmailQueryParam";
import { Language } from "../fi/hg/core/types/Language";

const LOG = LogService.createLogger('BackendController');

@RequestMapping("/")
export class BackendController {

    public static setDefaultLanguage (value: Language) {
        EmailAuthController.setDefaultLanguage(value);
    }

    @GetMapping("/")
    public static async getIndex (
        @RequestHeader('X-Authorization', {
            required: false,
            defaultValue: ''
        })
        token: string
    ): Promise<ResponseEntity<ReadonlyJsonObject | {readonly error: string}>> {
        try {

            return ResponseEntity.ok({
                hello: 'world'
            } as unknown as ReadonlyJsonObject);

        } catch (err) {
            LOG.error(`ERROR: `, err);
            return ResponseEntity.internalServerError<{readonly error: string}>().body({
                error: 'Internal Server Error'
            });
        }
    }

    @PostMapping("/authenticateEmail")
    public static async authenticateEmail (
        @RequestBody
            body: ReadonlyJsonObject,
        @RequestParam(AuthEmailQueryParam.LANGUAGE, RequestParamValueType.STRING)
            langString = ""
    ): Promise<ResponseEntity< EmailTokenDTO | ErrorDTO >> {
        return EmailAuthController.authenticateEmail(body, langString);
    }

    @PostMapping("/verifyEmailToken")
    public static async verifyEmailToken (
        @RequestBody
            body: ReadonlyJsonObject
    ): Promise<ResponseEntity<EmailTokenDTO | ErrorDTO>> {
        return EmailAuthController.verifyEmailToken(body);
    }

    @PostMapping("/verifyEmailCode")
    public static async verifyEmailCode (
        @RequestBody
            body: ReadonlyJsonObject
    ): Promise<ResponseEntity< EmailTokenDTO | ErrorDTO >> {
        return EmailAuthController.verifyEmailCode(body);
    }

}
