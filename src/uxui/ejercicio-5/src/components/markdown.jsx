function markdown({ external, children, name }) {
  if (external) {
    return <section data-markdown={name} />;
  } else {
    return (
      <section data-markdown>
        <div data-template>{children}</div>
      </section>
    );
  }
}

export default markdown;
