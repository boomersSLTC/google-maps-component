# Google Locator Sandive

**Google Locator Sandive** is a simple library for integrating Google Maps into your web application. It provides a location search bar and real-time map updates.

## Installation

You can install the library using npm:

```javascript
npm install google-locator-sandive
```

## Usage
Import the Location component:

```javascript
import { Location } from 'google-locator-sandive';
```
Add the Location component to your application, providing your Google Maps API key as a prop:

```javascript
<Location google_Api={YOUR_API_KEY_HERE} />
```
Replace YOUR_API_KEY_HERE with your actual Google Maps API key.

## Features

- Quick integration of Google Maps.
- Location search bar for user input.
- Real-time map updates as users enter locations.
- Display of the selected location's address in the search bar.

## If Error occurs refresh till search bar works or the error goes away