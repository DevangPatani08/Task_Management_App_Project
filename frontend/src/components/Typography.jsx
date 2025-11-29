
const Typography = ({variant, children, weight, className='', style={}, ...props}) => {
    const Tag = variant || 'p';
    
    const fontWeight = (weight) => {
        const heavy = { regular: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold', black: 'font-black' };
        return heavy[weight] || heavy.regular;
    };

    const defaultClass = (Tag) => {
        const typeClasses = {
            p: 'font-base tracking-normal leading-relaxed text-sm md:text-base lg:text-base xl:text-lg xl:leading-loose',
            h6: 'font-brand tracking-normal leading-normal capitalize text-base md:text-lg lg:text-xl',
            h5: 'font-brand tracking-normal leading-normal capitalize text-lg md:text-xl xl:text-2xl',
            h4: 'font-brand tracking-normal leading-normal capitalize text-xl md:text-2xl xl:text-3xl',
            h3: 'font-brand tracking-tight leading-snug capitalize text-2xl sm:leading-normal md:text-3xl md:leading-snug xl:text-4xl',
            h2: 'font-brand tracking-tight leading-snug capitalize text-3xl md:text-4xl lg:leading-tight xl:text-5xl',
            h1: 'font-brand tracking-tight leading-snug capitalize text-4xl md:text-5xl md:leading-tight xl:text-6xl'
        };

        return typeClasses[Tag] || typeClasses.p;
    };

    return (<Tag className={`${defaultClass(Tag)} ${ className } ${ fontWeight(weight)}`} style={style} {...props}>{children}</Tag>);
};

export default Typography;