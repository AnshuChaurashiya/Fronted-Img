import Loading from "./Loading";

const ImagePreview = (props) => {
    const handleDownload = () => {
        if (props.enhanced) {
            const link = document.createElement('a');
            link.href = props.enhanced;
            link.download = 'enhanced-image.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto px-4">
            {/* Original Image */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col">
                <h2 className="text-xl md:text-2xl font-bold text-center bg-gray-800 text-white py-3">
                    Original Image
                </h2>

                <div className="flex-grow flex items-center justify-center p-4">
                    {props.uploaded ? (
                        <img
                            src={props.uploaded}
                            alt="Original"
                            className="max-w-full max-h-96 object-contain rounded-lg"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-80 w-full bg-gray-200 text-gray-500 text-lg rounded-lg">
                            No Image Selected
                        </div>
                    )}
                </div>
            </div>

            {/* Enhanced Image */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col">
                <h2 className="text-xl md:text-2xl font-bold text-center bg-blue-800 text-white py-3">
                    Enhanced Image
                </h2>

                <div className="flex-grow flex items-center justify-center p-4 relative">
                    {props.enhanced && !props.loading && (
                        <>
                            <img
                                src={props.enhanced}
                                alt="Enhanced"
                                className="max-w-full max-h-96 object-contain rounded-lg"
                            />
                            <button
                                onClick={handleDownload}
                                className="absolute bottom-6 right-6 bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
                                aria-label="Download Enhanced Image"
                            >
                                Download
                            </button>
                        </>
                    )}

                    {props.loading ? (
                        <Loading />
                    ) : !props.enhanced && (
                        <div className="flex items-center justify-center h-80 w-full bg-gray-200 text-gray-500 text-lg rounded-lg">
                            No Enhanced Image
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImagePreview;
