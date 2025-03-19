let autoReactEnabled = true; // Default state: enabled

export async function before(m, { conn }) {
  if (!autoReactEnabled) return; // Stop execution if disabled

  const ownerID = 'owner@s.whatsapp.net'; // Replace with the actual owner ID
  const specialUsers = [
    '263781330745@s.whatsapp.net',
    '263789622747@s.whatsapp.net',
  ]; // List of users for automatic reactions

  // Define emoji lists for random selection
  const ownerEmojis = ['💖', '🔥', '✨', '🎉', '😍'];
  const specialUserEmojis = ['🤩', '🥳', '😎', '😁', '🚀'];

  // Function to get a random emoji from an array
  const getRandomEmoji = (emojiList) => emojiList[Math.floor(Math.random() * emojiList.length)];

  // Check if the message is in a group
  if (!m.isGroup) return;

  // Check if the owner is mentioned in the group
  if (m.mentionedJid?.includes(ownerID)) {
    try {
      // Reply to the mention with a custom message
      const replyMessage = `Hello! You mentioned the owner. How can I assist you?`;
      await conn.reply(m.chat, replyMessage, m, { mentions: [m.sender] });

      // React with a random emoji from the ownerEmojis list
      await conn.sendMessage(m.chat, {
        react: {
          text: getRandomEmoji(ownerEmojis),
          key: m.key,
        },
      });
    } catch (e) {
      console.error("Error handling owner mention:", e);
    }
  }

  // Automatically react to messages from special users with a random emoji
  if (specialUsers.includes(m.sender)) {
    try {
      await conn.sendMessage(m.chat, {
        react: {
          text: getRandomEmoji(specialUserEmojis),
          key: m.key,
        },
      });
    } catch (e) {
      console.error("Error sending reaction for special users:", e);
    }
  }
}

// Command to enable/disable auto-react
export const command = ['autoreact'];
export const handler = async (m, { text, conn }) => {
  if (text === 'on') {
    autoReactEnabled = true;
    await conn.reply(m.chat, '✅ Auto-Reaction has been **enabled**!', m);
  } else if (text === 'off') {
    autoReactEnabled = false;
    await conn.reply(m.chat, '❌ Auto-Reaction has been **disabled**!', m);
  } else {
    await conn.reply(m.chat, '⚙️ Use: `.autoreact on` or `.autoreact off`', m);
  }
};

// No restrictions (optional: limit to admins if needed)
export const admin = false;
export const disabled = false;

