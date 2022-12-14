import { Button } from '../button/button';
import { Heading } from '../heading/heading';

export function CookiesBanner({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed bg-white flex flex-col sm:flex-row items-center justify-center space-y-[16px] sm:space-x-[24px] sm:space-y-0 w-full mx-auto px-[20px] pb-[24px] pt-[32px] sm:px-[64px] sm:py-[30px]">
      <Heading level={3} className="text-haqq-black text-center">
        Our website uses cookies to ensure maximum user experience.
      </Heading>
      <Button variant={3} onClick={onClose}>
        Okay
      </Button>
    </div>
  );
}
