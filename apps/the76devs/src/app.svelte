<script>
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { fly, fade } from "svelte/transition";
    import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";

    import FA from "svelte-fa";

    import { faTwitter } from "@fortawesome/free-brands-svg-icons";
    import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

    let animate = false;

    let members = [];

    const title = tweened(0, {
        duration: 2000,
    });

    onMount(async () => {
        animate = true;
        title.set(76);

        try {
            const res = await fetch(
                "https://discord.com/api/guilds/1123669370208538744/widget.json"
            );

            const data = await res.json();

            members = data.members;

            console.log({ data });
        } catch (error) {
            console.log(error);
        }
    });
</script>

<nav>
    <div class="mx-auto flex max-w-4xl flex-wrap justify-between py-3">
        <div />
        <div class="flex items-center">
            <a
                class="btn-ghost btn-sm btn"
                target="_blank"
                href="https://twitter.com/the76devs"
            >
                <span class="mr-1">
                    <FA icon={faTwitter} />
                </span>
                Twitter
            </a>
            <a
                class="btn-ghost btn-sm btn ml-3"
                target="_blank"
                href="https://www.youtube.com/watch?v=1-0nyhAZ1P0&list=PLj0d0aDHkkJIdBDBlUgSekjt9jzJEobGa"
            >
                YouTube

                <span class="ml-1">
                    <FA icon={faArrowUpRightFromSquare} />
                </span>
            </a>
        </div>
    </div>
</nav>
<main>
    <div
        class="grid-animation pointer-events-none fixed left-0 bottom-0 flex w-screen scale-[2] flex-col items-center justify-between"
    >
        <LottiePlayer
            src="/animations/grid.json"
            autoplay={true}
            loop={true}
            controls={false}
            speed={0.25}
            renderer="svg"
            background="transparent"
            width="100%"
        />
    </div>
    <div class="flex min-h-screen items-center justify-center">
        {#if animate}
            <div
                in:fly={{
                    duration: 3000,
                    y: 100,
                }}
            >
                <div class="mx-auto max-w-sm">
                    <p
                        in:fade={{
                            delay: 2000,
                            duration: 1000,
                        }}
                        class="text-xl"
                    >
                        The
                    </p>
    
                    <h1 class="text-center text-[10rem] text-white">
                        {$title.toFixed()}
                    </h1>
    
                    <p
                        class="text-right text-xl"
                        in:fade={{
                            delay: 2200,
                            duration: 1000,
                        }}
                    >
                        Devs
                    </p>
    
                    <a
                        class="btn-outline btn-block btn mt-10 mb-10"
                        in:fly={{
                            delay: 2300,
                            duration: 1000,
                            y: 10,
                        }}
                        href="https://discord.gg/4g79Hm2ymy"
                        target="_blank"
                    >
                        Join Discord
                    </a>
                </div>
    
                <div class="max-h-xl relative mx-auto mt-10 max-w-xl overflow-auto">
                    <div
                        class="mb-4 flex items-center"
                        in:fade={{
                            delay: 2400,
                            duration: 1000,
                        }}
                    >
                        <div class="mr-2 h-2 w-2 rounded-full bg-green-400" />
                        <p class="">{members.length} Members Online</p>
                    </div>
    
                    <div class="flex flex-wrap">
                        {#each members as { avatar, avatar_url, discriminator, username }, idx}
                            {#if !username.toLowerCase().includes("bot")}
                                <div
                                    class="mr-2 mb-2 flex items-center rounded-xl bg-black p-3 shadow-xl"
                                    in:fade={{
                                        delay: 2400 + idx * 100,
                                        duration: 1000,
                                    }}
                                >
                                    <img
                                        class="h-[2rem] w-[2rem] min-w-[2rem] rounded-xl object-cover"
                                        src={avatar_url}
                                        alt=""
                                    />
                                    <div>
                                        <h3 class="ml-3 text-xs font-bold">
                                            {username}
                                        </h3>
                                    </div>
                                </div>
                            {/if}
                        {/each}
                    </div>
                </div>
            </div>
        {/if}
    </div>
</main>
