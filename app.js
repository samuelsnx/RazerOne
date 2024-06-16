function redirectToAmazon(asin) {
    const affiliateTag = 'seuCodigoDeAfiliado';  // Substitua pelo seu código de afiliado da Amazon
    const amazonURL = `https://www.amazon.com/dp/${asin}/?tag=${affiliateTag}`;
    window.open(amazonURL, '_blank');
}
