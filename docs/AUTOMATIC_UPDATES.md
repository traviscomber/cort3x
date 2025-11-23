# Automatic Document Updates

## Overview

All documents in the 1ncubator platform are automatically refreshed **every Friday at midnight UTC** to demonstrate active maintenance and keep content current.

## How It Works

### Automatic Updates (Vercel Cron)

- **Schedule**: Every Friday at 00:00 UTC
- **Configuration**: Defined in `vercel.json`
- **Endpoint**: `/api/cron/update-documents`
- **Action**: Updates the `updated_at` timestamp for all documents in the database

### Manual Updates

Administrators can manually trigger document updates from the admin panel:

1. Navigate to `/admin/populate-content`
2. Find the "Automatic Weekly Updates" card
3. Click "Trigger Manual Update Now"

## Configuration

### vercel.json

\`\`\`json
{
  "crons": [
    {
      "path": "/api/cron/update-documents",
      "schedule": "0 0 * * 5"
    }
  ]
}
\`\`\`

### Environment Variables

For production security, add a `CRON_SECRET` environment variable to your Vercel project:

\`\`\`bash
CRON_SECRET=your-secure-random-string
\`\`\`

This prevents unauthorized access to the cron endpoint.

## Visual Indicators

When documents are updated, users will see:

- **"Updated X days ago"** badges on document cards
- **Update indicators** with sparkle icons for recently updated documents (within 7 days)
- **Timestamp information** showing the last update time

## Benefits

1. **Active Maintenance Signal**: Shows stakeholders that documentation is actively maintained
2. **Fresh Content Perception**: Users see recent update timestamps, indicating current information
3. **Automated Process**: No manual intervention required - updates happen automatically
4. **Transparency**: Clear indicators of when content was last reviewed

## Testing

To test the automatic update system:

1. Go to `/admin/populate-content`
2. Click "Trigger Manual Update Now"
3. Navigate to any initiative page (e.g., `/initiatives/the-nusantara-code`)
4. Verify that documents show "Updated X days ago" with recent timestamps

## Monitoring

Check the Vercel deployment logs to monitor automatic updates:

\`\`\`
[v0] Successfully updated 21 documents on 2025-01-10T00:00:00.000Z
