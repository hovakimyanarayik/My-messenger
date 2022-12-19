import { UploadRequestOption as RcCustomRequestOptions } from 'rc-upload/lib/interface';


export interface UploadFieldProps{
    imageUrl?: string
    onUpload: (options: RcCustomRequestOptions) => void
    handleRemoveFile?: () => void
}


export interface StorageHookMethods {
    isUploading: boolean
    downloadURL: string | null
    uploadFile: (options: RcCustomRequestOptions | any) => void
    removeFileURL: () => void
}