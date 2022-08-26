import { ExtensionConstants } from './types/extension-constants';
export class constants implements ExtensionConstants{
    companyProfileHref: string;

    constructor(){
        this.companyProfileHref = 'https://www.linkedin.com/company/onlogic/?miniCompanyUrn=urn%3Ali%3Afs_miniCompany%3A51672367';
    }
}