-- Merge Royal Pop Indonesia initiatives - Keep the orange one (royal-pop-indonesia-national-heritage-atlas)
-- and delete the gray duplicate (heritage-atlas-royal-pop-indonesia)

-- Step 1: Move all documents from the gray initiative to the orange initiative
UPDATE documents
SET initiative_id = 'royal-pop-indonesia-national-heritage-atlas'
WHERE initiative_id IN (
  'heritage-atlas-royal-pop-indonesia',
  'heritage-atlas',
  'royal-pop-heritage-atlas'
);

-- Step 2: Delete the duplicate gray initiative(s)
DELETE FROM initiatives
WHERE id IN (
  'heritage-atlas-royal-pop-indonesia',
  'heritage-atlas',
  'royal-pop-heritage-atlas'
)
AND id != 'royal-pop-indonesia-national-heritage-atlas';

-- Step 3: Ensure the orange initiative has complete data
UPDATE initiatives
SET 
  title = 'Royal Pop Indonesia - National Heritage Atlas',
  description = 'Indonesia''s first cultural metaverse combining collectibles, AI, film, and immersive experiences — merging heritage, technology, and creativity into a profitable global IP universe.',
  category = 'Cultural Innovation',
  status = 'active',
  updated_at = NOW()
WHERE id = 'royal-pop-indonesia-national-heritage-atlas';
