import { ProvideBrandingExtensions } from "../lifecycles/BrandingExtensions";
import { ProvideCryptoSetupExtensions } from "../lifecycles/CryptoSetupExtensions";
import { ProvideExperimentalExtensions } from "../lifecycles/ExperimentalExtensions";
export declare type AllExtensions = {
    branding?: ProvideBrandingExtensions;
    cryptoSetup?: ProvideCryptoSetupExtensions;
    experimental?: ProvideExperimentalExtensions;
};
