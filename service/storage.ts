import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from './firebase'

const getFileFromStorage = async (path: string): Promise<string | null> => {
    try {
        return await getDownloadURL(ref(storage, path))
    } catch (error) {
        console.error('getFileFromStorage', error)
        return null
    }
}

export { getFileFromStorage }
