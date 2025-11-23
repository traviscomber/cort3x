# 1ncubator Platform SQL Scripts

## Quick Start: Restore All Initiatives

To populate all 4 initiatives with complete documentation, execute this script in your Supabase SQL editor:

\`\`\`sql
scripts/restore-all-4-initiatives.sql
\`\`\`

This will create:
- **The Nusantara Code** (8 documents) - Carbon pricing governance and environmental policy
- **Heritage Atlas** (4 documents) - Indonesian cultural heritage and AI-powered folklore revival
- **Objective Track App** (5 documents) - Gamified personal growth and life tracking
- **1ncubator Platform** (4 documents) - The accelerator platform itself

**Total: 4 initiatives with 21 comprehensive documents**

---

## Individual Initiative Scripts

If you prefer to populate initiatives one at a time, use these scripts:

1. `populate-nusantara-code-initiative.sql` - The Nusantara Code (8 documents)
2. `populate-heritage-atlas-initiative.sql` - Heritage Atlas (4 documents)
3. `populate-objective-track-initiative.sql` - Objective Track App (5 documents)
4. `populate-1ncubator-platform.sql` - 1ncubator Platform (4 documents)

---

## Utility Scripts

- `cleanup-nusantara-documents.sql` - Delete all Nusantara Code documents
- `add-location-system.sql` - Add location tracking system to database

---

## How to Execute

### In Supabase SQL Editor:
1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Copy the entire content of the script you want to run
4. Paste into the SQL editor
5. Click "Run"

### Verification:
After running `restore-all-4-initiatives.sql`, you should see:
- 4 initiatives created
- 21 documents total
- All content properly formatted with images and comprehensive documentation

---

## Troubleshooting

**Error: "column 'tags' is of type jsonb but expression is of type text[]"**
- This means the script has incorrect tag formatting
- All scripts in this directory use proper JSONB format: `'["tag1", "tag2"]'::jsonb`

**Error: "syntax error at or near"**
- Make sure you're copying the entire script content
- Verify no characters were corrupted during copy/paste
- Try executing individual initiative scripts instead of the master script

**Error: "null value in column 'id'"**
- All scripts properly generate UUIDs using `gen_random_uuid()`
- Make sure your Supabase instance has the `uuid-ossp` or `pgcrypto` extension enabled
