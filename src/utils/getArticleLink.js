const HN_ROOT = 'https://news.ycombinator/com';
export const HN_ITEM = `${HN_ROOT}/item?id=`;
export const HN_USER = `${HN_ROOT}/user?id=`;

const getArticleLink = ({ url, id }) => {
	const commentURL = `${HN_ITEM}${id}`;
	const link = !!url ? url : commentURL;

	return link;
};

export default getArticleLink;