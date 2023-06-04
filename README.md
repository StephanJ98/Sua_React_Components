# Sua React Components Library

Ceci est ul librerie de composants React que j'ai cree au fur des années.

Tous ou presque tous les composant sont crées avec Typescript, ce qui permet leus utilisation avec Javascript et TypeScript.

## Utilisation

1. Importes le packet avec:

- NPM `npm install @stephanj98/sua_react_components`
- YARN `yarn add @stephanj98/sua_react_components`
- PNPM `pnpm add @stephanj98/sua_react_components`

2. Les utiliser facilement dans votre code. Les examples vous motrerent comment.


# Composants

- [Modal](#modal)

## Modal

### Table de propietées

| Prop | defaults | Obligatoire | Description |
|-|-|-|-|
| `title` | null | Oui | Titre a aficher dans le header du modal. |
| `isOpen` | `false` | Oui | Etat d'ouverture du composant |
| `toggle` | null | Oui | Fonction qui gere la transition d'etat du composant |
| `children` | null | Oui | Autres composant JSX ou TSX passées au composant |

### Utilisation

> ***RECOMENDATION***: L'utilisation d'un custom hook pour gerer l'etat est recomendée.

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
import { Modal } from '@StephanJ98/sua_react_components'
import useModal from './hooks/useModal'

function App() {
  // Custom Hook qui gere le state du composant  
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