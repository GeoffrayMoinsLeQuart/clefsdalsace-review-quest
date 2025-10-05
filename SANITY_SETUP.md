# Configuration Sanity

## Configuration du client Sanity

Pour connecter votre projet Sanity, modifiez le fichier `src/lib/sanity.ts` :

```typescript
export const sanityClient = createClient({
  projectId: 'votre_project_id', // Remplacez par votre projectId Sanity
  dataset: 'production',         // Ou votre dataset
  useCdn: true,
  apiVersion: '2024-01-01',
});
```

### Où trouver votre projectId ?

1. Connectez-vous à [sanity.io](https://www.sanity.io/)
2. Sélectionnez votre projet
3. Allez dans Settings
4. Copiez votre Project ID

## Schéma des données

### Property (Bien immobilier)

```javascript
{
  _type: 'property',
  title: 'string',        // Titre du bien
  slug: {
    _type: 'slug',
    current: 'string'     // URL-friendly identifier
  },
  description: 'text',    // Description complète
  price: 'number',        // Loyer mensuel
  area: 'number',         // Surface en m²
  bedrooms: 'number',     // Nombre de chambres
  bathrooms: 'number',    // Nombre de salles de bain
  location: 'string',     // Ville/quartier
  type: 'string',         // 'conciergerie' ou 'gestion-locative'
  status: 'string',       // 'available', 'rented', 'sold'
  images: [{
    _type: 'image',
    asset: { _ref: 'string' }
  }],
  features: ['string'],   // Liste des caractéristiques
  amenities: ['string'],  // Liste des équipements
  revenue: {
    before: 'string',     // Ex: "1500€/mois"
    after: 'string',      // Ex: "2100€/mois"
    increase: 'string'    // Ex: "+40%"
  },
  details: {
    floor: 'number',
    parking: 'boolean',
    elevator: 'boolean',
    balcony: 'boolean',
    furnished: 'boolean'
  }
}
```

### Blog Post

```javascript
{
  _type: 'post',
  title: 'string',
  slug: {
    _type: 'slug',
    current: 'string'
  },
  excerpt: 'text',
  mainImage: {
    _type: 'image',
    asset: { _ref: 'string' }
  },
  body: 'array',          // Portable Text content
  publishedAt: 'datetime',
  author: {
    _type: 'reference',
    _ref: 'author_id'
  },
  categories: [{
    _type: 'reference',
    _ref: 'category_id'
  }]
}
```

## Fallback

Si Sanity n'est pas configuré ou échoue, l'application utilise des données mockées automatiquement. Cela permet de tester l'interface sans avoir à configurer Sanity immédiatement.

## Prochaines étapes

1. Créer les schémas dans votre Studio Sanity
2. Ajouter quelques biens immobiliers de test
3. Configurer le projectId dans `src/lib/sanity.ts`
4. Les données apparaîtront automatiquement sur le site !
