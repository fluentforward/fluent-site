# API Documentation

## Newsletter Subscription API

### Endpoint
`POST /api/newsletter`

### Description
Subscribes a user to the newsletter using the Resend API.

### Request Body
```json
{
  "email": "user@example.com"
}
```

### Response

#### Success (200)
```json
{
  "message": "Successfully subscribed to newsletter",
  "data": {
    // Resend API response data
  }
}
```

#### Error (400)
```json
{
  "error": "Email address is required"
}
```

```json
{
  "error": "Invalid email address"
}
```

#### Error (500)
```json
{
  "error": "Failed to subscribe to newsletter"
}
```

### Environment Variables Required

Create a `.env.local` file in the root directory with the following variables:

```bash
# Resend API Configuration
RESEND_API_KEY=your_resend_api_key_here
RESEND_AUDIENCE_ID=your_resend_audience_id_here
```

### Setup Instructions

1. Sign up for a [Resend](https://resend.com) account
2. Create an API key in your Resend dashboard
3. Create an audience in Resend and note the audience ID
4. Add the environment variables to your `.env.local` file
5. The API endpoint will be available at `/api/newsletter`

### Usage Example

```javascript
// Frontend usage example
const subscribeToNewsletter = async (email) => {
  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('Successfully subscribed:', data.message);
    } else {
      console.error('Subscription failed:', data.error);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};
``` 