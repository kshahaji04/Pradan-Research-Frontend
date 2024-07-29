export const generatePublicationURL = (type: string, slug: string) => {
    let url = ``;

    if (type.includes('Ongoing')) {
        url += `/research/ongoing-research/${slug}`;
    } else if (type.includes('Concluded')) {
        url += `/research/concluded-research/${slug}`;
    } else {
        url += `/featured-publication-detail/${slug}`;
    }

    return url;
}