/* this page was heavily debugged using ChatGPT */

const poems = [
"Sunrise spills gold, shadows retreat, morning wakes anew.",
    "Dawn stretches softly, painting skies with pastel hues.",
    "Morning whispers, birds sing, dreams fade to light.",
    "The sun ascends, warming earth, awakening life's symphony.",
    "Golden rays pierce clouds, day breathes fresh beginnings again.",
    "Noon blazes bright, shadows shrink, time slows its pace.",
    "Afternoon lingers, bees hum, sunlight drips through trees.",
    "Dusk arrives gently, sky blushing with crimson farewell.",
    "Twilight deepens, stars peek, night begins its serenade.",
    "Moonlight dances softly, embracing earth's quiet embrace.",
    "Midnight whispers secrets, dreams drift on silent winds.",
    "Starlight flickers gently, time stands still, hearts dream.",
    "Shadows stretch long, dusk's palette colors the horizon.",
    "Sunrise bursts vivid, illuminating earth's hopeful heartbeat.",
    "Morning dew glistens, nature awakens to sunlight's touch.",
    "Noon hovers bold, heat wraps earth in golden stillness.",
    "Afternoon fades, the horizon blushes, whispers of rest.",
    "Dusk kisses softly, folding the day into night's arms.",
    "Stars scatter brightly, a celestial canvas above dreaming earth.",
    "Moonlight spills cool, wrapping night's quiet like a shawl.",
    "Dawn tiptoes lightly, waking dreams hidden in soft mist.",
    "Sunlight cascades freely, bathing the world in golden promise.",
    "Noon’s light sharpens, shadows hide in heat’s fierce glare.",
    "Afternoon stretches, lazy warmth settles on weary shoulders.",
    "Dusk breathes softly, painting horizons with whispered farewells.",
    "Twilight unfolds stars, a prelude to midnight’s velvet song.",
    "Moon hangs silver, a sentinel guarding silent slumber.",
    "Starlight twinkles softly, echoing the quiet pulse of time.",
    "Sunrise renews, kissing earth with light’s tender forgiveness.",
    "Morning mist lifts, revealing nature's quiet daily rebirth.",
    "Noon shines boldly, chasing shadows from their hidden corners.",
    "Afternoon rests gently, as golden hours start to whisper.",
    "Dusk whispers low, a lullaby sung to weary skies.",
    "Twilight settles, folding time into starlight’s gentle arms.",
    "Midnight sighs deeply, embracing the universe's boundless quietude.",
    "Moonlight guides dreams, weaving stories in a silent glow.",
    "Starlight murmurs softly, wrapping night in its endless song.",
    "Dawn stretches wide, banishing shadows with rosy brilliance.",
    "Morning awakens softly, kissed by sunlight’s golden fingertips.",
    "Noon strides fierce, sunlight blazing across the vast expanse.",
    "Afternoon lingers warm, time slows beneath the golden haze.",
    "Dusk falls gently, cradling the day in twilight’s glow.",
    "Stars shimmer faintly, promises of infinity written in light.",
    "Moonlight whispers calm, soothing earth with tender radiance.",
    "Starlight scatters dreams, twinkling across the eternal canvas above.",
    "Sunrise bursts forth, nature’s daily rebirth wrapped in gold.",
    "Morning laughs softly, greeting earth with fresh new light.",
    "Noon commands strong, heat stretching its hand across the sky.",
    "Afternoon yawns wide, slipping softly into dusk’s waiting arms."
  ];
  
// Select a random poem and update the page
function displayRandomPoem() {
    const randomIndex = Math.floor(Math.random() * poems.length);
    const randomPoem = poems[randomIndex];
    const lineElement = document.querySelector('.line-1');

    // Set the poem text
    lineElement.textContent = randomPoem;

    // Reset animation
    lineElement.classList.remove('anim-typewriter', 'stop-cursor');
    void lineElement.offsetWidth; // Trigger reflow to restart animation
    lineElement.classList.add('anim-typewriter');

    // Stop the cursor blinking after the animation ends
    lineElement.addEventListener('animationend', () => {
        lineElement.classList.add('stop-cursor'); // Add class to stop cursor
    }, { once: true }); // Ensure this only runs once
}

document.addEventListener('DOMContentLoaded', displayRandomPoem);