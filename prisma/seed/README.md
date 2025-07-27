# Database Seeding Documentation

## Overview

This directory contains seed files for populating the database with initial car-related data. The seed files include car makes, models, body types, fuel types, and transmission types, all with Arabic translations.

## Seed Files

### Core Data Files

- **`carMake.ts`** - Car manufacturers (Toyota, BMW, Mercedes-Benz, etc.)
- **`carModel.ts`** - Car models grouped by manufacturer
- **`carBodyType.ts`** - Vehicle body types (Sedan, SUV, Hatchback, etc.)
- **`carFuelType.ts`** - Fuel types (Gasoline, Diesel, Electric, Hybrid, etc.)
- **`carTransmission.ts`** - Transmission types (Manual, Automatic, CVT, etc.)
- **`index.ts`** - Main entry point that runs all seed functions

### Running Seeds

```bash
# Run all seeds
npm run db:seed

# Or manually
npx tsx prisma/seed/index.ts
```

## Car Logo Setup Instructions

The car makes seed file is currently configured with `null` values for `imageUrl` fields to avoid broken external links. Follow these steps to set up reliable, local logo assets.

## Quick Setup (Recommended)

### 1. Create Directory Structure

```bash
mkdir -p public/logos/car-makes
```

### 2. Download Car Brand Logos

Download high-quality PNG/SVG logos for each brand. Recommended sources:

- Official brand websites
- Wikipedia Commons
- Brand press kits
- Stock photo sites (with proper licensing)

### 3. Save with Consistent Naming

Save logos using the brand slug format:

```
public/logos/car-makes/toyota.png
public/logos/car-makes/honda.png
public/logos/car-makes/bmw.png
public/logos/car-makes/mercedes-benz.png
public/logos/car-makes/land-rover.png
// etc.
```

### 4. Update Seed Files

Replace `null` values with local paths:

```javascript
// Before
imageUrl: null,

// After
imageUrl: "/logos/car-makes/toyota.png",
```

## Alternative Solutions

### Option 1: Use a CDN Service

Upload logos to a reliable CDN like:

- **Cloudinary** (recommended for images)
- **AWS S3** + CloudFront
- **Vercel Blob Storage**
- **Supabase Storage**

### Option 2: Base64 Encoding

For very small logos, you can encode them as base64:

```javascript
imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...";
```

## Logo Requirements

### Technical Specs

- **Format**: PNG (with transparency) or SVG preferred
- **Size**: 200x200px minimum, 512x512px recommended
- **Background**: Transparent preferred
- **Quality**: High resolution for retina displays

### Legal Considerations

- Ensure you have proper licensing for logo usage
- Car brand logos are typically trademarked
- Use only official logos from authorized sources
- Consider fair use limitations for commercial applications

## Current Brand List

The following brands need logos:

- Toyota, Honda, Ford, BMW, Mercedes-Benz
- Volkswagen, Hyundai, Subaru, Lexus, Infiniti
- Cadillac, Ram, Jeep, Chrysler, Lincoln
- Volvo, Jaguar, Land Rover, Genesis
- Alfa Romeo, Fiat, Mini, Mitsubishi, Suzuki

## Benefits of Local Assets

✅ No broken external links  
✅ Faster loading times  
✅ Better caching control  
✅ No dependency on third-party services  
✅ Consistent image quality  
✅ Works offline

## Next Steps

1. Run the seed script with `null` values (works fine for development)
2. Gradually add logos as needed
3. Update production deployment with proper assets
4. Consider implementing a fallback placeholder image

---

## Seed Data Contents

### Body Types (12 types)

- Sedan, SUV, Hatchback, Coupe, Convertible
- Wagon, Pickup Truck, Van, Minivan, Crossover
- Sports Car, Luxury

### Fuel Types (9 types)

- Gasoline, Diesel, Hybrid, Electric
- Plug-in Hybrid, CNG, LPG, Ethanol, Hydrogen

### Transmission Types (8 types)

- Manual, Automatic, CVT, Semi-Automatic
- Dual-Clutch, Tiptronic, Manual Sequential, AMT

### Car Makes (24 brands)

From major manufacturers across Japan, Germany, USA, South Korea, UK, Italy, and Sweden.

### Car Models (25+ models)

Popular models from Toyota, Honda, Ford, BMW, and Mercedes-Benz.

All seed data includes:

- English names
- Arabic translations (nameAr)
- URL-friendly slugs
- Proper timestamps

---

**Note**: The seed files will work perfectly with `null` values for car make logos - you can add logos later when ready for production.
