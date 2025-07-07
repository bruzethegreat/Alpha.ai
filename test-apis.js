// Simple API test script
async function testGroqAPI() {
  console.log('Testing Groq API...');
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY || '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'}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [{ role: 'user', content: 'Hello, test message' }],
        max_tokens: 100
      })
    });
    
    const data = await response.json();
    if (response.ok) {
      console.log('✅ Groq API working:', data.choices[0].message.content);
    } else {
      console.log('❌ Groq API error:', data);
    }
  } catch (error) {
    console.log('❌ Groq API failed:', error.message);
  }
}

async function testTavilyAPI() {
  console.log('\nTesting Tavily API...');
  try {
    const response = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        api_key: process.env.TAVILY_API_KEY || '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',
        query: 'test search',
        max_results: 3
      })
    });
    
    const data = await response.json();
    if (response.ok) {
      console.log('✅ Tavily API working:', data.results?.length, 'results');
    } else {
      console.log('❌ Tavily API error:', data);
    }
  } catch (error) {
    console.log('❌ Tavily API failed:', error.message);
  }
}

async function testSupabaseAPI() {
  console.log('\nTesting Supabase API...');
  try {
    const response = await fetch('https://gghyfybxgxlqsjboaxzd.supabase.co/rest/v1/', {
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnaHlmeWJ4Z3hscXNqYm9heHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMzkxOTksImV4cCI6MjA2NTkxNTE5OX0.B81JRqMMQ_t_gFtDYlSYI8UigKlA-lRwQqDye2mtEv0',
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      console.log('✅ Supabase API accessible');
    } else {
      console.log('❌ Supabase API error:', response.status);
    }
  } catch (error) {
    console.log('❌ Supabase API failed:', error.message);
  }
}

async function runTests() {
  console.log('🧪 Testing Alpha.AI API integrations...\n');
  await testGroqAPI();
  await testTavilyAPI();
  await testSupabaseAPI();
  console.log('\n✅ API tests completed');
}

runTests();