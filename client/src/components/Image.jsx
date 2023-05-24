function Image({ src, ...rest }) {
    src = src && src.includes('https://')
        ? src
        : 'http://localhost:4000/uploads/' + src;
    return (
        <img {...rest} src={src} alt={''} className="w-[200px] h-[200px] object-cover rounded-xl" />
    );
}

export default Image;