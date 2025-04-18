export class LinkedInService {
  private accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  async publishCertificate(certificate: {
    name: string;
    organization: string;
    issueDate: string;
    expirationDate?: string;
    credentialUrl?: string;
  }) {
    const apiUrl = 'https://api.linkedin.com/v2/credentials';
    
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: certificate.name,
          organization: certificate.organization,
          issueDate: new Date(certificate.issueDate).getTime(),
          expirationDate: certificate.expirationDate ? new Date(certificate.expirationDate).getTime() : undefined,
          credentialUrl: certificate.credentialUrl,
        }),
      });

      if (!response.ok) {
        throw new Error(`LinkedIn API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error publishing certificate to LinkedIn:', error);
      throw error;
    }
  }
}