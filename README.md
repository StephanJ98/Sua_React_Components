Ceci est une librairie de composants React que j'ai créé au fur des années.

Tous ou presque tous les composants sont créés avec TypeScript, ce qui permet leur utilisation avec JavaScript et TypeScript.

## Utilisation

1. Importer le packet avec:

- NPM `npm install sua_react_components`
- YARN `yarn add sua_react_components`
- PNPM `pnpm add sua_react_components`

2. Les utiliser facilement dans votre code. Les exemples vous montrent comment.


# Composants

- [Modal](#modal)

## Modal

### Table de propriétés

| Prop | Defaults | Obligatoire | Description |
|-|-|-|-|
| `title` | null | Oui | Titre à afficher dans le header du modal |
| `isOpen` | `false` | Oui | État d'ouverture du composant |
| `toggle` | null | Oui | Fonction qui gère la transition d'état du composant |
| `children` | null | Oui | Autres composants JSX ou TSX passées au composant |

### Utilisation

> ***RECOMMANDATION***: L'utilisation d'un custom hook pour gérer l'état est recommandée.

```jsx
// Exemple de custom hook
import { useState } from "react"

export default function useModal() {
    const [isOpen, setisOpen] = useState(false)
    const toggle = () => { setisOpen(!isOpen) }
    return { isOpen, toggle }
}
```

```jsx
import { Modal } from 'sua_react_components'
import useModal from './hooks/useModal'

function App() {
  // Custom Hook qui gère l'état du composant  
  const { isOpen, toggle } = useModal()

  return (
    <div className='app'>
      <button onClick={toggle}>Open Modal 1</button>

      <Modal isOpen={isOpen} toggle={toggle} title={'Example 1'}>
        <div className='contenidoModal'>
          <p>Modal Content</p>
        </div>
      </Modal>
    </div>
  )
}
export default App
```