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

const getFilesFromStorage = async (path: string, files: any) => {
    // let filesData: string[] = []
    //
    // for (const file of files) {
    //     const snapshot = await getDownloadURL(ref(storage, path))
    //     filesData.push(snapshot)
    //     console.log(filesData)
    // }
    // return filesData
}

export { getFileFromStorage, getFilesFromStorage }
