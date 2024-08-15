describe('First test using GEN AI', () => {
  before(() => {
    const prompt = 'Making data';
    const model = 'GPT-4o'; // Modelo específico

    cy.request({
      method: 'POST',
      url: 'https://api.openai.com/v1/completions',
      headers: {
        'Authorization': `Bearer ${Cypress.env('GEN_AI_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: {
        prompt: prompt,
        max_tokens: 10,
        temperature: 0.7,
        model: model, // Incluyendo el modelo aquí
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });
  });

  it('debería obtener una respuesta de la API', () => {
    // Aquí puedes agregar más pruebas relacionadas con la respuesta de la API
  });

  it('getting .env', () => {
    cy.log(`${Cypress.env('GEN_AI_API_KEY')}`);
 });
});
