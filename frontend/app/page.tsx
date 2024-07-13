
import Button from "../ui/Button/Button";
import Counter from "../ui/Counter/Counter";
import Text from "../ui/Text/Text";
import ThemeToggler from "../ui/ThemeToggler/ThemeToggler";

const Page = () => {
  console.log('# server');

  return (
    <main style={{color: 'var(--color-foreground-primary)', backgroundColor: 'var(--color-background-primary)'}}>
      {/* <Text tag="h1" display="h1">{counter.value}</Text> */}
      {/* <button onClick={() => dispatch(increment())}></button> */}
      <Text tag="h1" display="h1">Redcollar is coming soon...</Text>
      <Text tag="h1" display="h2">Redcollar is coming soon...</Text>
      <Text tag="h1" display="h3">Redcollar is coming soon...</Text>
      <Text tag="h1" display="p1">Redcollar is coming soon...</Text>
      <Text tag="h1" display="p2">Redcollar is coming soon...</Text>
      <Text tag="h1" display="p3">Redcollar is coming soon...</Text>

      <Button display="primary">Button</Button>
      <ThemeToggler />

      <Counter />
    </main>
  );
}

export default Page;
