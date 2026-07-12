import {Hero} from "@/components/business/hero/hero"
import { Problems } from "@/components/business/problems";
import { Features } from "@/components/business/features";
import SeeItInAction from "@/components/business/SeeItInAction";
import ProcessAndFeatures from "@/components/business/ProcessAndFeatures";
import Pricing from "@/components/business/pricing";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <Problems />
      <Features />
      <SeeItInAction />
      <ProcessAndFeatures/>
      <Pricing />

    </div>
  );
}