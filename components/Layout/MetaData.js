import Head from 'next/head';

const MetaData = ({ title, description }) => {
	// const router = useRouter();
	const siteTitle = title + ' - NextEvents';
	// const pageURL = process.env.publicURL + router.pathname;

	return (
		<Head>
			<meta name="viewport" content="width=device-width, minimum-scale=1, user-scalable=no" />
			<title>NextEvents</title>

			{/* if title exist then overwrite it */}
			{title && <title>{siteTitle}</title>}
			{description && <meta name="description" content={description} />}

			{/* Open Graph Data */}
			{title && <meta property="og:title" content={siteTitle} />}
			{/* <meta property="og:url" content={pageURL} /> */}
			<meta property="og:type" content="website" />
			{description && <meta property="og:description" content={description} />}
		</Head>
	);
};

export default MetaData;
