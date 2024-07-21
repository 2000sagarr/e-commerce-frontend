export const navigation = {
    categories: [
      {
        id: 'men',
        name: 'Men',
        featured: [
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Mens Kurtas', id: 'mens_kurta' },
              { name: 'Shirt', id: 'shirt' },
              { name: 'Men Jeans', id: 'men_jeans' },
            ],
          },
          // {
          //   id: 'accessories',
          //   name: 'Accessories',
          //   items: [
          //     { name: 'Watches', id: '#' },
          //     { name: 'Wallets', id: '#' },
          //     { name: 'Bags', id: '#' },
          //     { name: 'Sunglasses', id: '#' },
          //     { name: 'Hats', id: '#' },
          //     { name: 'Belts', id: '#' },
          //   ],
          // },
          // {
          //   id: 'brands',
          //   name: 'Brands',
          //   items: [
          //     { name: 'Re-Arranged', id: '#' },
          //     { name: 'Counterfeit', id: '#' },
          //     { name: 'Full Nelson', id: '#' },
          //     { name: 'My Way', id: '#' },
          //   ],
          // },
        ],
      },
      {
        id: 'women',
        name: 'Women',
        featured: [],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', id:"top", href: `{women/clothing/tops}` },
              { name: 'Dresses', id:"women_dress", href: '#' },
              { name: 'Women Jeans', id: 'women_jeans' }
            ],
          }
        ],
      }
      
    ],
    pages: [
      // { name: 'Company', id: '/' },
      // { name: 'Stores', id: '/' },
    ],
  }