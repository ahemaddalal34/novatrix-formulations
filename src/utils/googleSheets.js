/**
 * Generic utility to submit form data to a Google Apps Script Web App.
 * 
 * @param {Object} data - The form data to submit.
 * @param {string} type - The type of form (Contact, Franchise, etc.)
 * @returns {Promise<Object>} - Success/Error result.
 */
export const submitToGoogleSheets = async (data, type = 'General') => {
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw-WspYXyxmt4wC9Jvto2qom7XHcucMexAHXutnskpeTpr2l1NOdG7k9fkTkXhAtgqi/exec';

  try {
    // We use URLSearchParams because Google Apps Script e.parameter 
    // works best with application/x-www-form-urlencoded
    const formData = new URLSearchParams();
    formData.append('type', type);
    
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Critical for Google Apps Script to bypass CORS restrictions
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    // Note: With mode 'no-cors', we can't read the response body,
    // but the data will still be submitted successfully.
    return { success: true };
  } catch (error) {
    console.error('Submission Error:', error);
    return { success: false, error: error.message };
  }
};
