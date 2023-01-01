import React from 'react';
import { UploadRequestOption as RcCustomRequestOptions } from 'rc-upload/lib/interface';


export interface UploadFieldProps{
    imageUrl: string | null
    onUpload: (options: RcCustomRequestOptions) => void
    handleRemoveFile?: () => void
    children: React.ReactNode
    showUploadList?: boolean
    previewType?: "circle" | "rect"
}


export interface StorageHookMethods {
    isUploading: boolean
    downloadURL: string | null
    uploadFile: (options: RcCustomRequestOptions | any) => void
    removeFileURL: () => void
}