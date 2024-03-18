import {FC} from "react";

import InlineSVG from "react-inlinesvg";
import i_check_circle from "../../../assets/img/icons/check_circle.svg"
import i_cloud_download from "../../../assets/img/icons/cloud_download.svg"
import i_cloud_upload from "../../../assets/img/icons/cloud_upload.svg"
import i_menu from "../../../assets/img/icons/menu.svg"
import i_person from "../../../assets/img/icons/person.svg"
import i_smb_share from "../../../assets/img/icons/smb_share.svg"
import i_sync_lock from "../../../assets/img/icons/sync_lock.svg"
import i_visibility_lock from "../../../assets/img/icons/visibility_lock.svg"
import i_vpn_key from "../../../assets/img/icons/vpn_key.svg"

export enum CloudHireIcons {
    checkCircle = i_check_circle,
    cloudDownload = i_cloud_download,
    cloudUpload = i_cloud_upload,
    menu = i_menu,
    person = i_person,
    smbShare = i_smb_share,
    syncLock = i_sync_lock,
    visibilityLock = i_visibility_lock,
    vpnKey = i_vpn_key
}

type iconProps = {
    icon: CloudHireIcons
    size?: number
    color?: string
}

const Icon: FC<iconProps> = ({icon, color, size}) => {
    return <InlineSVG src={icon} fill={color} width={size} height={size}/>
}

export default Icon