interface VideoPreviewProps {
    src: string
}

const VideoPreview = ({ src }: VideoPreviewProps) => {
    return (
        <div className="ratio ratio-16x9">
            <iframe src={src} title="YouTube video" allowFullScreen></iframe>
        </div>
    )
}

export default VideoPreview
