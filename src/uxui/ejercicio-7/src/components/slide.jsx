function slide({ children, id, animate, restart }) {
  return (
    <section
      data-auto-animate-id={id}
      data-auto-animate={animate || null}
      data-auto-animate-restart={restart || null}
    >
      {children}
    </section>
  );
}

export default slide;
