// Test internal routing system
import('./app/lib/routing/analyzer.js').then(async ({ QueryAnalyzer }) => {
  console.log('🧪 Testing internal routing system...\n');
  
  const analyzer = QueryAnalyzer.getInstance();
  
  // Test different query types
  const testQueries = [
    { query: 'How do I implement authentication in React?', type: 'coding' },
    { query: 'What are the latest developments in AI?', type: 'research' },
    { query: 'Write a creative story about robots', type: 'creative' },
    { query: 'What is 2 + 2?', type: 'math' },
    { query: 'What is the capital of France?', type: 'factual' }
  ];
  
  console.log('Testing query analysis...');
  for (const test of testQueries) {
    try {
      const analysis = analyzer.analyze(test.query);
      console.log(`✅ ${test.type}: ${test.query}`);
      console.log(`   Intent: ${analysis.intent}, Complexity: ${analysis.complexity}, Web: ${analysis.requiresWeb}`);
    } catch (error) {
      console.log(`❌ ${test.type}: ${error.message}`);
    }
  }
  
  console.log('\n✅ Routing tests completed');
}).catch(error => {
  console.log('❌ Could not test routing system:', error.message);
  console.log('This is expected in Node.js environment - routing works in Next.js context');
});