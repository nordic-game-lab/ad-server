import 'dotenv/config';
import Event from '../models/Event.js';

// Helper function to insert rows
async function insertRow(adId: number, location: object, siteId: string, advertiserId: string, campaignId: string, eventType: string){
if (adId || location || siteId || advertiserId || campaignId || eventType) {
  try {
    await Event.create({
      ad_id: adId,
      location: JSON.stringify(location),
      site_id: siteId,
      advertiser_id: advertiserId,
      campaign: campaignId,
      event_type: eventType
    });
  
    console.log(`Row inserted successfully.`);
  } catch (error) {
    console.error(`Failed to insert row: ${error}`);
  }
} else {
    console.error("Missing required data to insert row.");
}
}

// Track ad impression
export async function trackAdImpression(adID: number, location: object, siteID: string, advertiserID: string, campaignId: string){
  await insertRow(adID, location, siteID, advertiserID, campaignId, "impression");
}

// Track ad click
export async function trackAdClick(adID: number, location: object, siteID: string, advertiserID: string, campaignId: string){
  await insertRow(adID, location, siteID, advertiserID, campaignId, "click");
}
