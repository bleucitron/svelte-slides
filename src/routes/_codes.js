export const codeClass = `class MyComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      nb: 0,
    };

    this.updateNb = this.updateNb.bind(this);
  }

  updateNb() {
    this.setState(state => { nb: state.nb + 1 });
  }

  render() {
    return <div>Hello</div>;
  }
}`;

export const codeHooks = `function MyComponent() {
  const [nb, setNb] = useState(0);
  const [other, setOther] = useState(nb);

  useEffect(() => console.log('MOUNT'), []);

  if (nb > 0) {
    useEffect(() => console.log('youhou'), [nb])
  }

  useEffect(() => setOther(nb * 10), [nb]);

  return <div>Hello</div>;
}`;
