export const codeClass = `class MyComponent extends React.Component {
  render() {
    return <div>Hello</div>
  }
}`;

export const codeHooks = `function MyComponent() {
  // pas intuitif
  const [nb, setNb] = useState(0);
  const [other, setOther] = useState(nb);

  // exécuté au montage ? sérieux ?
  useEffect(() => {
    console.log('MOUNT');
  }, []);

  // je veux utiliser mon effet seulement quand nb change
  if (nb > 0) {
    useEffect(() => {
      console.log('youhou');
    }, [nb])
  }

  // bah oui, other dépend de nb, alors je mets un effet
  useEffect(() => {
    setOther(nb * 10);
  }, [nb]);


  return <div>Hello</div>;
}`;
