const { google } = require('googleapis');
require('dotenv').config();

const search = async (req, res) => {
    const { search } = req.query;
    try {
        // retrieving video statistics - like, views, comments
        const videoStatistics = await google.youtube('v3').videos.list({
            key: process.env.YOUTUBE_API_KEY, 
            part: 'statistics',
            id: search.split('=')[1]
        });
        const { viewCount, likeCount, commentCount } = videoStatistics.data.items[0].statistics;
        
        // retrieving channel id
        const result = await google.youtube('v3').search.list({
            part: 'snippet',
            q: search,
            key: process.env.YOUTUBE_API_KEY
        })
        const { channelId } = result.data.items[0].snippet;

        // retrieving channel statistics - subscribers count
        const channelStatistics = await google.youtube('v3').channels.list({
            part: 'statistics',
            id: channelId,
            key: process.env.YOUTUBE_API_KEY
        })
        const { subscriberCount } = channelStatistics.data.items[0].statistics;

        // Calculating Video Earnings
        const earnings = Math.min(subscriberCount, viewCount) + (10 * commentCount) + (5 * likeCount);

        res.send({ success: true, data: { viewCount, likeCount, commentCount, subscriberCount, earnings }, message: 'video metrics fetched successfully' });
    } catch(err) { 
        console.log(err);
            res.status(500).json({ success: false, error: 'Something went wrong. Please try again after some time.' });
    }
}

module.exports = search;