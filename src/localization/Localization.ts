import LocalizedStrings from 'react-localization';
import { loginEN } from '../localization/authentication/login/login-en';
import { loginVI } from '../localization/authentication/login/login-vi';
import { listEN } from '../localization/user/list/list-en';
import { listVI } from '../localization/user/list/list-vi';
import { detailEN } from '../localization/user/detail/detail-en';
import { detailVI } from '../localization/user/detail/detail-vi';
import { editEN } from '../localization/user/edit/edit-en';
import { editVI } from '../localization/user/edit/edit-vi';
import { createEN } from '../localization/user/create/create-en';
import { createVI } from '../localization/user/create/create-vi';
import { confirmEN } from '../localization/user/confirm/confirm-en';
import { confirmVI } from '../localization/user/confirm/confirm-vi';
import { commonEN } from '../localization/common/common-en';
import { commonVI } from '../localization/common/common-vi';
import { errorEN } from '../localization/error/error-en';
import { errorVI } from '../localization/error/error-vi';

export const strings = new LocalizedStrings({
  vi: {
    login: loginVI,
    list: listVI,
    detail: detailVI,
    edit: editVI,
    create: createVI,
    confirm: confirmVI,
    common: commonVI,
    error: errorVI,
  },
  en: {
    login: loginEN,
    list: listEN,
    detail: detailEN,
    edit: editEN,
    create: createEN,
    confirm: confirmEN,
    common: commonEN,
    error: errorEN,
  },
});
