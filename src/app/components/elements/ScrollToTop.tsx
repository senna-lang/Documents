"use client";

import { Button, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

export const ScrollToTop = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Transition transition="slide-up" mounted={scroll.y > 700}>
      {(transitionStyles) => (
        <Button
          variant="outline"
          color="gray"
          size="md"
          radius="xl"
          style={transitionStyles}
          onClick={() => scrollTo({ y: 0 })}
        >
          Scroll to top
        </Button>
      )}
    </Transition>
  );
};
