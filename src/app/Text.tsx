"use client";
import TypeIt from "typeit-react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import author from "@/data/author.json";
import team from "@/data/team.json";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { Fragment } from "react";
import Presence from "./Presence";

const formatTime = (data: { day: number; month: number; year: number }) => {
  const _now = new Date();
  _now.setDate(data.day);
  _now.setMonth(data.month);
  _now.setFullYear(data.year);
  return formatDistanceToNow(_now);
};

export default function Text() {
  return (
    <main className="min-h-screen divide-y-[14px] divide-transparent py-16">
      <div id="author" className="flex gap-5">
        <span className="text-4xl font-bold">Furina Developer</span>
        <Image
          src="/welcome.svg"
          alt="Welcome Icon"
          sizes="100vw"
          width={40}
          height={40}
          className="animate-wave"
        />
      </div>

      <div id="status" className="flex gap-3">
        <div className="relative my-auto size-6 rounded-full bg-white">
          <div className="absolute size-6 animate-ping rounded-full bg-white" />
        </div>
        <span className="text-lg">currently online</span>
        <FaLocationDot className="my-auto text-2xl" />
        <span className="text-lg">Khanh Hoa / Viet Nam</span>
      </div>

      <ul id="information" className="mt-4 flex flex-col gap-1 text-lg">
        <li>
          ● Hello, I&apos;m Furina (Xiro) - a normal{" "}
          <TypeIt
            className="text-highlight"
            as="span"
            getBeforeInit={instance => {
              return instance
                .type("studecq")
                .pause(750)
                .delete(1)
                .pause(50)
                .delete(1)
                .pause(500)
                .type("nt")
                .pause(2500)
                .delete(7)
                .pause(250)
                .type("fullsnack developer")
                .pause(150)
                .move(-13)
                .delete(1)
                .type("t")
                .pause(150)
                .move(13)
                .pause(750)
                .delete(19)
                .pause(250)
                .type("bot discord co der")
                .pause(150)
                .move(-3)
                .delete(1)
                .pause(150)
                .move(3)
                .pause(750);
            }}
            options={{
              loop: true,
              loopDelay: 7500,
              startDelete: true,
              startDelay: 4000,
            }}
          />
          .
        </li>
        {/* prettier-ignore */}
        <li>
          ● I&apos;m{" "}
          {formatTime(author.birthday)} old{" "}
          and have been studying it for{" "}
          {formatTime(author.startdev)}.
        </li>
        <li>
          ● Administrator of{" "}
          <Link
            href={team.info.website}
            className="hover:text-white/70"
            target="_self"
            tabIndex={-1}
          >
            {team.info.name}
          </Link>{" "}
          - {team.info.description}.
        </li>
        <li>● Experienced with Next.JS(FE), Elysia.JS(BE) and Linux system.</li>
        <li>● Support me by buying me a cup of coffee to keep me motivated.</li>
        <li>
          ● Hire me or send me a message via
          {[
            { name: "Facebook", value: author.socialmedia.facebook },
            { name: "Discord", value: author.socialmedia.discord },
            { name: "E-mail", value: author.socialmedia.email },
          ].map(({ name, value }, i) => {
            return (
              <Fragment key={i}>
                {" "}
                <Link
                  href={value}
                  className="hover:text-white/70"
                  target="_self"
                  tabIndex={-1}
                >
                  {name}
                </Link>
              </Fragment>
            );
          })}
          .
        </li>
      </ul>
      <Presence />
    </main>
  );
}
