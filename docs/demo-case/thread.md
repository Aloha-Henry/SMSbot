# Thread — Maria S. — Mar 2 to Apr 1, 2026 (evidence plane) — revision 2

Synthetic. Same client, same events and same client messages as revision 1 wherever the agent's
turn did not change what she would naturally say next; agent turns regenerated under protocol
PIRRA-STD-1.4 (`protocol.md`). Every row is one entry in the append-only log. Columns: log id ·
local timestamp · `message_class` · who (label as shown to the client) · library id for agent
prompts · text. Flags, dispositions, digests and receipts live in `timeline.md`.

Times are local to the client. Hash-chain links and RFC 3161 timestamps omitted for readability.
The Counts table at the bottom is checked against this table by `web/scripts/build-demo-case.py`.

| LOG | When | Class | Who | Lib | Text |
|---|---|---|---|---|---|
| LOG-0001 | 2026-03-02 16:41 | system_event | system | — | Direction letter authorized by S. Alvarez. Protocol PIRRA-STD-1.4. Mode Standard. Level 2 with sourced slots. Approval regime: library. Forum pinned: CA Superior (alt. C.D. Cal.). Photo election: none. Disclosure text v4. Letter hash 4c9e…b17a. |
| LOG-0002 | 2026-03-03 09:12 | agent_prompt | PIRRA | P-01 | Hi Maria, this is PIRRA, an AI assistant provided by [Firm Name] and directed by your attorney, Sara Alvarez. Sara asked me to help keep an accurate record of how your recovery is going, by text, a few times a week. |
| LOG-0003 | 2026-03-03 09:12 | agent_prompt | PIRRA | P-02 | A few things first. I'm an AI, not a person, and I'm not a lawyer or a doctor. What you tell me goes into your file at [Firm Name] for your legal team; Sara can read it and reply right here. Sara decides whether and how anything in your file is used in your case, so just be accurate. Good days count as much as hard ones. A person at the firm checks this thread on business days; it isn't watched around the clock. In an emergency, call 911. Text STOP any time to stop these messages, or HUMAN to reach a person at the firm. |
| LOG-0004 | 2026-03-03 09:12 | agent_prompt | PIRRA | P-03 | Are you OK texting with me about your recovery? Reply YES to start. |
| LOG-0005 | 2026-03-03 09:20 | client_statement | Maria | — | YES |
| LOG-0006 | 2026-03-03 09:20 | system_event | system | — | Consent recorded. Disclosure text v4, hash 2b7d…e904. Notice state → DISCLOSED_CONSENTED. |
| LOG-0007 | 2026-03-03 09:21 | agent_prompt | PIRRA | P-04 | Thank you. Before we get into today, help me understand what a normal day looked like for you before the accident. |
| LOG-0008 | 2026-03-03 09:26 | client_statement | Maria | — | up at 6, get my daughter ready (she's 3), drop her at daycare, work 8 to 4:30, I'm a dental hygienist so on my feet all day, gym twice a week. carried her everywhere honestly, she's a mama's girl |
| LOG-0009 | 2026-03-03 09:27 | agent_prompt | PIRRA | P-05 | And right now, what can't you do that matters most to you? |
| LOG-0010 | 2026-03-03 09:31 | client_statement | Maria | — | picking her up. and sleeping. I haven't slept a full night since the crash |
| LOG-0011 | 2026-03-03 09:32 | agent_prompt | PIRRA | P-06 | Where does it hurt right now? If you can, give me a 0–10 for each place. |
| LOG-0012 | 2026-03-03 09:35 | client_statement | Maria | — | lower back 6. right shoulder 5. neck is stiff but not really pain |
| LOG-0013 | 2026-03-03 09:35 | agent_prompt | PIRRA | P-07 | Had you had any trouble with those areas before this? |
| LOG-0014 | 2026-03-03 09:38 | client_statement | Maria | — | no, never. I mean normal sore after the gym but nothing like this |
| LOG-0015 | 2026-03-03 09:39 | agent_prompt | PIRRA | P-08 | I'll check in Monday, Wednesday and Friday mornings, and after appointments. Do mornings work? And is it OK if you send voice notes sometimes instead of typing? |
| LOG-0016 | 2026-03-03 09:41 | client_statement | Maria | — | mornings are good. voice is fine |
| LOG-0017 | 2026-03-03 09:41 | agent_prompt | PIRRA | P-09 | Great. You don't have to wait for me: if something happens, text me right when it's happening, any time. |
| LOG-0018 | 2026-03-04 09:00 | agent_prompt | PIRRA | P-10a | Morning, Maria — how are you feeling right now? |
| LOG-0019 | 2026-03-04 09:47 | client_statement | Maria | — | tired. slept maybe 3 hours. back is a 6 when I stand up |
| LOG-0020 | 2026-03-04 09:48 | agent_prompt | PIRRA | P-11a | What's today looking like for you? |
| LOG-0021 | 2026-03-04 10:02 | client_statement | Maria | — | called out of work. can't stand at the chair 8 hours like this |
| LOG-0022 | 2026-03-05 22:40 | client_statement | Maria | — | can't sleep. back is a 7 lying down, worse on my side |
| LOG-0023 | 2026-03-05 22:41 | agent_prompt | PIRRA | P-20 | I'm sorry, Maria. Noted, right when it's happening. Is anything helping at all? |
| LOG-0024 | 2026-03-05 22:46 | client_statement | Maria | — | heat pad a little. going to try the couch |
| LOG-0025 | 2026-03-05 22:46 | agent_prompt | PIRRA | P-21 | Okay. If it's still like this in the morning, tell me. Goodnight, Maria. |
| LOG-0026 | 2026-03-06 09:00 | agent_prompt | PIRRA | P-10b | Morning, Maria — how did the rest of the night go? |
| LOG-0027 | 2026-03-06 09:15 | client_statement | Maria | — | honestly not bad. the couch helped, slept 5 hours maybe. back is a 3 right now |
| LOG-0028 | 2026-03-06 09:16 | agent_prompt | PIRRA | P-16 | That's a change from Thursday night. Anything else different today? |
| LOG-0029 | 2026-03-06 09:20 | client_statement | Maria | — | no. going to try work today |
| LOG-0030 | 2026-03-09 09:00 | agent_prompt | PIRRA | P-10a | Morning, Maria — how are you feeling right now? |
| LOG-0031 | 2026-03-09 09:22 | client_statement | Maria | — | woke up 4 times, back locked when I got up |
| LOG-0032 | 2026-03-09 09:23 | agent_prompt | PIRRA | P-12a | And now that you're up and moving? |
| LOG-0033 | 2026-03-09 09:30 | client_statement | Maria | — | 5 sitting. worse when I get up |
| LOG-0034 | 2026-03-10 16:30 | agent_prompt | PIRRA | P-30 | You saw Dr. Patel today — how are you feeling right after? |
| LOG-0035 | 2026-03-10 17:12 | client_statement | Maria | — | he said lumbar strain and shoulder strain. PT twice a week, MRI if I'm not better in 6 weeks. back is a 5 rn |
| LOG-0036 | 2026-03-10 17:14 | client_statement | Maria | — | do I really have to do the PT? its 40 min away |
| LOG-0037 | 2026-03-10 17:14 | agent_prompt | PIRRA | P-50 | That's a question for a person at the firm — I've passed it along and someone will get back to you tomorrow morning. |
| LOG-0038 | 2026-03-11 08:40 | attorney_communication | Dana R. (paralegal, [Firm Name]) | — | Hi Maria, it's Dana from [Firm Name]. Please do go to the PT Dr. Patel ordered — it matters for your recovery. If the drive is a problem, call me at 555-0134 and we'll look at closer options. |
| LOG-0039 | 2026-03-11 09:00 | agent_prompt | PIRRA | P-10c | Morning, Maria. What's today looking like? |
| LOG-0040 | 2026-03-11 09:35 | client_statement | Maria | — | back 5. still so mad about all this. the guy was on his phone, I saw him. and I probably could have braked sooner idk |
| LOG-0041 | 2026-03-11 09:36 | agent_prompt | PIRRA | P-90 | I hear how frustrating this is. I'm here for how you're doing, not for what happened in the crash — that part is for Sara directly. What else is going on today? |
| LOG-0042 | 2026-03-11 09:44 | client_statement | Maria | — | just can't bend to load the dishwasher. my mom did it |
| LOG-0043 | 2026-03-12 12:00 | agent_prompt | PIRRA | P-31 | How did the first PT session go? What, if anything, feels different afterward? |
| LOG-0044 | 2026-03-12 12:38 | client_statement | Maria | — | she measured my shoulder, I couldn't get my arm past like shoulder height. it's kind of burning now, a 5. back is ok, 4 |
| LOG-0045 | 2026-03-12 12:39 | agent_prompt | PIRRA | P-32 | Did they give you anything to do between sessions? |
| LOG-0046 | 2026-03-12 12:45 | client_statement | Maria | — | yeah, exercises. 3 times a day supposedly |
| LOG-0047 | 2026-03-13 09:00 | agent_prompt | PIRRA | P-10a | Morning, Maria — how are you feeling right now? |
| LOG-0048 | 2026-03-13 09:50 | client_statement | Maria | — | went in for a half day yesterday. standing at the chair was rough by hour 3. today back 5 shoulder 4 |
| LOG-0049 | 2026-03-13 09:51 | agent_prompt | PIRRA | P-11 | And today — anything different, better or worse? |
| LOG-0050 | 2026-03-13 10:15 | client_statement | Maria | — | not going in today. Dr said light duty and there is no light duty in hygiene lol |
| LOG-0051 | 2026-03-14 18:05 | client_statement | Maria | — | couldn't carry the groceries in. 4 trips with one bag each. embarrassing |
| LOG-0052 | 2026-03-14 18:06 | agent_prompt | PIRRA | P-22 | That sounds really hard, Maria. Do you want to tell me more about what happened? |
| LOG-0053 | 2026-03-14 18:15 | client_statement | Maria | — | couldn't grip and lift with the right arm, and bending to get them off the trunk floor did my back in. 6 now. and the shoulder woke up too, 5 |
| LOG-0054 | 2026-03-14 18:16 | agent_prompt | PIRRA | P-23 | Thank you for telling me. If it's still like this tonight, tell me. |
| LOG-0055 | 2026-03-16 09:00 | agent_prompt | PIRRA | P-10a | Morning, Maria — how are you feeling right now? |
| LOG-0056 | 2026-03-16 09:12 | client_statement | Maria | — | good day actually. 3. did my exercises both days |
| LOG-0057 | 2026-03-16 09:13 | agent_prompt | PIRRA | P-15 | You mentioned "couldn't carry the groceries in" on Saturday. Since then — easier, harder, or about the same? |
| LOG-0058 | 2026-03-16 09:20 | client_statement | Maria | — | about the same honestly, I just don't carry stuff. mom's been coming by. going to work |
| LOG-0059 | 2026-03-17 12:00 | agent_prompt | PIRRA | P-31 | How did today's session go? What, if anything, feels different afterward? |
| LOG-0060 | 2026-03-17 13:30 | client_statement | Maria | — | fine. tired. 4 |
| LOG-0061 | 2026-03-17 13:31 | agent_prompt | PIRRA | P-18 | When you say 4 — is that the back, the shoulder, or overall? |
| LOG-0062 | 2026-03-17 13:40 | client_statement | Maria | — | overall I guess. both about a 4 |
| LOG-0063 | 2026-03-18 09:00 | agent_prompt | PIRRA | P-10b | Morning, Maria — how did last night go? |
| LOG-0064 | 2026-03-19 12:00 | agent_prompt | PIRRA | P-31 | How did today's session go? What, if anything, feels different afterward? |
| LOG-0065 | 2026-03-19 17:00 | agent_prompt | PIRRA | P-40 | No rush, Maria — whenever you have a minute, how are you doing today? |
| LOG-0066 | 2026-03-20 09:00 | agent_prompt | PIRRA | P-10c | Morning, Maria. What's today looking like? |
| LOG-0067 | 2026-03-20 13:15 | attorney_communication | Dana R. (paralegal, [Firm Name]) | — | Hi Maria, Dana here — just checking that you're okay. Call or text me any time. |
| LOG-0068 | 2026-03-20 19:48 | client_statement | Maria | — | sorry. my daughter had a stomach thing all week and I was up with her every night. I'm ok. I missed PT thursday. back like a 5, shoulder 4 |
| LOG-0069 | 2026-03-20 19:49 | agent_prompt | PIRRA | P-13 | Glad you're okay, and I hope your daughter is feeling better. That's a lot of nights up. Noted on Thursday. Anything else I should know about how the week went for you? |
| LOG-0070 | 2026-03-20 19:55 | client_statement | Maria | — | lifting her when she's sick is the worst part. otherwise just tired |
| LOG-0071 | 2026-03-21 16:20 | client_statement | Maria | — | missed my daughter's recital. couldn't sit that long on those little chairs, stood in the back and then had to leave. cried in the car |
| LOG-0072 | 2026-03-21 16:21 | agent_prompt | PIRRA | P-22 | That sounds really disappointing, Maria. Do you want to tell me more about how the afternoon went? |
| LOG-0073 | 2026-03-21 16:29 | client_statement | Maria | — | it was 45 minutes. I lasted maybe 15 on the chair then stood in the back, then my back started spasming so I went to the car. she looked for me after. I'm a 6 right now and it's still spasming |
| LOG-0074 | 2026-03-21 16:30 | agent_prompt | PIRRA | P-23 | Thank you for telling me. If it's still like this tonight, tell me. |
| LOG-0075 | 2026-03-23 09:00 | agent_prompt | PIRRA | P-10a | Morning, Maria — how are you feeling right now? |
| LOG-0076 | 2026-03-23 09:18 | client_statement | Maria | — | 4. ok weekend otherwise |
| LOG-0077 | 2026-03-23 09:19 | agent_prompt | PIRRA | P-15 | You mentioned "couldn't sit that long" on Saturday. Since then — easier, harder, or about the same? |
| LOG-0078 | 2026-03-23 09:26 | client_statement | Maria | — | about the same. I stand at the counter to eat now |
| LOG-0079 | 2026-03-23 10:32 | attorney_communication | Sara Alvarez (your attorney) | — | Maria, it's Sara Alvarez. Dana told me about the recital and I'm sorry. Keep telling PIRRA how you're doing, the good days and the hard ones. And call me any time. |
| LOG-0080 | 2026-03-23 10:40 | client_statement | Maria | — | thank you |
| LOG-0081 | 2026-03-24 12:00 | agent_prompt | PIRRA | P-31 | How did today's session go? What, if anything, feels different afterward? |
| LOG-0082 | 2026-03-24 12:50 | client_statement | Maria | — | shoulder is better honestly, got my arm higher. 4. back same, 5 |
| LOG-0083 | 2026-03-25 09:00 | agent_prompt | PIRRA | P-10b | Morning, Maria — how did last night go? |
| LOG-0084 | 2026-03-25 09:41 | client_statement | Maria | — | slept ok. back 5. I mean my back's been a thing since I fell off a ladder in 2019 but never like this, that was a week of advil |
| LOG-0085 | 2026-03-25 09:42 | agent_prompt | PIRRA | P-14 | Thanks for telling me. Right now, what does the back stop you from doing that you could do before February? |
| LOG-0086 | 2026-03-25 09:50 | client_statement | Maria | — | everything with her. the bath, the car seat, carrying her up the stairs |
| LOG-0087 | 2026-03-26 12:00 | agent_prompt | PIRRA | P-31 | How did today's session go? What, if anything, feels different afterward? |
| LOG-0088 | 2026-03-26 14:05 | client_statement | Maria | — | good session. 4 and 4 |
| LOG-0089 | 2026-03-27 09:00 | agent_prompt | PIRRA | P-10a | Morning, Maria — how are you feeling right now? |
| LOG-0090 | 2026-03-27 09:33 | client_statement | Maria (voice note, 0:41, transcript) | — | Hey, it's Maria. Um, today's okay. Back's about a four, shoulder's a three. I slept like five hours which is the most in a while. Still can't lift her, but I did the car seat with my left arm and kind of leaned in, so. Yeah. Okay, bye. |
| LOG-0091 | 2026-03-27 09:33 | system_event | system | — | Media received. Raw audio sealed to vault (vault id 7e21…). Transcript derivative attached to LOG-0090. Speech-to-text provider: contracted, zero-retention. |
| LOG-0092 | 2026-03-27 09:34 | agent_prompt | PIRRA | P-19 | Got it, thank you. Noted on the car seat. |
| LOG-0093 | 2026-03-30 09:00 | agent_prompt | PIRRA | P-10c | Morning, Maria. What's today looking like? |
| LOG-0094 | 2026-03-30 09:27 | client_statement | Maria | — | went back a full day friday and regretted it, 6 by the afternoon. also Patel's office called in a muscle relaxer, started it saturday |
| LOG-0095 | 2026-03-30 09:28 | agent_prompt | PIRRA | P-12b | And this morning, how is it? |
| LOG-0096 | 2026-03-30 09:35 | client_statement | Maria | — | 5. the relaxer helps at night but I'm foggy in the morning |
| LOG-0097 | 2026-03-31 12:00 | agent_prompt | PIRRA | P-31 | How did today's session go? What, if anything, feels different afterward? |
| LOG-0098 | 2026-03-31 13:10 | client_statement | Maria | — | ok. 4 and 4 |
| LOG-0099 | 2026-03-31 15:42 | client_statement | Maria | — | some adjuster from the other guy's insurance called asking how I'm doing. I said fine and hung up. was that bad?? |
| LOG-0100 | 2026-03-31 15:43 | agent_prompt | PIRRA | P-51 | Good that you told me. That's for Sara, not me — I've flagged it and she'll be in touch shortly. Are you okay right now? |
| LOG-0101 | 2026-03-31 15:50 | client_statement | Maria | — | yeah. just rattled |
| LOG-0102 | 2026-03-31 16:05 | attorney_communication | Sara Alvarez (your attorney) | — | Maria — Sara. Please don't speak with any insurance adjuster; give them my number, 555-0130, and let them go. I'm calling you in ten minutes. |
| LOG-0103 | 2026-03-31 16:06 | client_statement | Maria | — | ok |
| LOG-0104 | 2026-04-01 09:00 | agent_prompt | PIRRA | P-10a | Morning, Maria — how are you feeling right now? |
| LOG-0105 | 2026-04-01 09:19 | client_statement | Maria | — | shoulder 3, back 5. better than a month ago for sure. still can't pick her up |
| LOG-0106 | 2026-04-01 09:20 | agent_prompt | PIRRA | P-15b | On day one you said "picking her up" was what mattered most. Where does that stand today? |
| LOG-0107 | 2026-04-01 09:30 | client_statement | Maria | — | still can't. but I can get her into the car seat with my left arm now, and she's learned to climb. going to work, half day |

## Counts

Checked by `web/scripts/build-demo-case.py`; the build fails if these drift from the table.

| | |
|---|---|
| Rows | 107 |
| client_statement | 48 |
| agent_prompt | 52 |
| attorney_communication | 4 |
| system_event | 3 |
| Scheduled openers sent | 13 (P-10a ×7, P-10b ×3, P-10c ×3) · unanswered: Mar 18, Mar 20 (until the human reach-out) |
| Post-appointment triggers | 7 (1 ortho, 6 PT) · unanswered: Mar 19 (missed session) |
| Client-initiated | 4 (Mar 5, Mar 14, Mar 21, Mar 31) |
| Sourced-slot prompts | 3 (LOG-0057, LOG-0077, LOG-0106) |
| Open invitations after life events | 2 (LOG-0052, LOG-0072) |
| Clarifications of an unlocated score | 1 (LOG-0061) |
| Questions routed to a person | 2 (LOG-0036, LOG-0099) |
| Liability steers | 1 (LOG-0041) |
| Present-state questions asked within 60 min of an answered one | 0 |
