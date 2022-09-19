import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from './firebase'
import { tr } from './language'
import { getDownloadUrl } from '@firebase/storage/dist/src/implementation/requests'

const getFileFromStorage = async (path: string): Promise<string | null> => {
    try {
        return await getDownloadURL(ref(storage, path))
    } catch (error) {
        console.error('getFileFromStorage', error)
        return null
    }
}

// const getPhotosFromStorage = async (files: any) => {
//     let filesData: string[] = []
//
//     for (const file of files) {
//         const snapshot = await getDownloadUrl(ref(storage, file))
//     }
// }

export { getFileFromStorage }
