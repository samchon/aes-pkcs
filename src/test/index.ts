import { AesPkcs5 } from "../AesPkcs5";

namespace RandomGenerator
{
    const CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    export function randint(from: number, to: number): number
    {
        return Math.round(Math.random() * (to - from)) + from;
    }

    export function alphabets(length: number): string
    {
        let ret: string = "";
        for (let i: number = 0; i < length; ++i)
        {
            let index: number = randint(9, CHARACTERS.length - 1);
            ret += CHARACTERS[index];
        }
        return ret;
    }
}

function main(): void
{
    for (let i: number = 0; i < 100000; ++i)
    {
        const word: string = RandomGenerator.alphabets(RandomGenerator.randint(100, 1000));
        const key: string = RandomGenerator.alphabets(Math.random() < .5 ? 16 : 32);
        const iv: string = RandomGenerator.alphabets(16);

        const encrypted: string = AesPkcs5.encode(word, key, iv);
        const decoded: string = AesPkcs5.decode(encrypted, key, iv);

        if (word !== decoded)
            throw new Error(`Bug on AesPkcs.encode() or decode(): failed to restore "${word}" -> "${decoded}".`);
    }
}
main();