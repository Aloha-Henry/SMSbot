# Thread — Maria S. — Mar 2 to Apr 1, 2026 (evidence plane)

Synthetic. Every row is one entry in the append-only log. Columns: log id · local timestamp ·
`message_class` · who (label as shown to the client, where applicable) · library id for agent
prompts · text. Flags, dispositions, digests and receipts are **not** in this table; they live in
the intelligence and supervision planes, `timeline.md`.

`agent_prompt` rows are the agent. `client_statement` rows are Maria. `attorney_communication`
rows are humans at the firm, labeled to the client by name and role. `system_event` rows are the
system recording something about itself.

Times are local to the client. Every row carries a hash-chain link and an RFC 3161 timestamp in
the real log; omitted here for readability.

| LOG | When | Class | Who | Lib | Text |
|---|---|---|---|---|---|
| LOG-0001 | 2026-03-02 16:41 | system_event | system | — | Direction letter authorized by S. Alvarez. Protocol PIRRA-STD-1.3. Mode Standard. Level 2. Approval regime: library. Forum pinned: CA Superior (alt. C.D. Cal.). Photo election: none. Disclosure text v3. Letter hash 4c9e…b17a. |
| LOG-0002 | 2026-03-03 09:12 | agent_prompt | PIRRA | P-01 | Hi Maria, this is PIRRA, an AI assistant provided by [Firm Name] and directed by your attorney, Sara Alvarez. Sara asked me to help keep an accurate record of how your recovery is going, by text, a few times a week. |
| LOG-0003 | 2026-03-03 09:12 | agent_prompt | PIRRA | P-02 | A few things first. I'm an AI, not a person, and I'm not a lawyer or a doctor. What you tell me goes into your file at [Firm Name] for your legal team; Sara can read it and reply right here. Anything in your file may be used in your case, so just be accurate. Good days count as much as hard ones. A person at the firm checks this thread on business days; it isn't watched around the clock. In an emergency, call 911. Text STOP any time to stop these messages, or HUMAN to reach a person at the firm. |
| LOG-0004 | 2026-03-03 09:12 | agent_prompt | PIRRA | P-03 | Are you OK texting with me about your recovery? Reply YES to start. |
| LOG-0005 | 2026-03-03 09:20 | client_statement | Maria | — | YES |
| LOG-0006 | 2026-03-03 09:20 | system_event | system | — | Consent recorded. Disclosure text v3, hash 9f3a…c21e. Notice state → DISCLOSED_CONSENTED. |
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
| LOG-0018 | 2026-03-04 09:00 | agent_prompt | PIRRA | P-10 | Morning, Maria — how are you feeling right now? |
| LOG-0019 | 2026-03-04 09:47 | client_statement | Maria | — | tired. slept maybe 3 hours. back is a 6 when I stand up |
| LOG-0020 | 2026-03-04 09:48 | agent_prompt | PIRRA | P-11 | Is it getting in the way of anything today? |
| LOG-0021 | 2026-03-04 10:02 | client_statement | Maria | — | called out of work. can't stand at the chair 8 hours like this |
| LOG-0022 | 2026-03-05 22:40 | client_statement | Maria | — | can't sleep. back is a 7 lying down, worse on my side |
| LOG-0023 | 2026-03-05 22:41 | agent_prompt | PIRRA | P-20 | I'm sorry. Thank you for telling me right when it's happening. How's the back right now? |
| LOG-0024 | 2026-03-05 22:46 | client_statement | Maria | — | same. heat pad helps a little. going to try the couch |
| LOG-0025 | 2026-03-05 22:46 | agent_prompt | PIRRA | P-21 | Okay. If it's still like this in the morning, tell me. Goodnight, Maria. |
| LOG-0026 | 2026-03-06 09:00 | agent_prompt | PIRRA | P-10 | Morning, Maria — how are you feeling right now? |
| LOG-0027 | 2026-03-06 09:15 | client_statement | Maria | — | honestly not bad today. a 3. slept on the couch and it helped |
| LOG-0028 | 2026-03-06 09:16 | agent_prompt | PIRRA | P-11 | Is it getting in the way of anything today? |
| LOG-0029 | 2026-03-06 09:20 | client_statement | Maria | — | no. going to try work today |
| LOG-0030 | 2026-03-09 09:00 | agent_prompt | PIRRA | P-10 | Morning, Maria — how are you feeling right now? |
| LOG-0031 | 2026-03-09 09:22 | client_statement | Maria | — | woke up 4 times, back locked when I got up |
| LOG-0032 | 2026-03-09 09:23 | agent_prompt | PIRRA | P-12 | And right now, the back? |
| LOG-0033 | 2026-03-09 09:30 | client_statement | Maria | — | 5 sitting. worse when I get up |
| LOG-0034 | 2026-03-10 16:30 | agent_prompt | PIRRA | P-30 | You saw Dr. Patel today — how are you feeling right after? |
| LOG-0035 | 2026-03-10 17:12 | client_statement | Maria | — | he said lumbar strain and shoulder strain. PT twice a week, MRI if I'm not better in 6 weeks. back is a 5 rn |
| LOG-0036 | 2026-03-10 17:14 | client_statement | Maria | — | do I really have to do the PT? its 40 min away |
| LOG-0037 | 2026-03-10 17:14 | agent_prompt | PIRRA | P-50 | That's a question for a person at the firm — I've passed it along and someone will get back to you. How's the shoulder right now? |
| LOG-0038 | 2026-03-10 17:20 | client_statement | Maria | — | shoulder 4. mostly stiff |
| LOG-0039 | 2026-03-11 08:40 | attorney_communication | Dana R. (paralegal, [Firm Name]) | — | Hi Maria, it's Dana from [Firm Name]. Please do go to the PT Dr. Patel ordered — it matters for your recovery. If the drive is a problem, call me at 555-0134 and we'll look at closer options. |
| LOG-0040 | 2026-03-11 09:00 | agent_prompt | PIRRA | P-10 | Morning, Maria — how are you feeling right now? |
| LOG-0041 | 2026-03-11 09:35 | client_statement | Maria | — | back 5. still so mad about all this. the guy was on his phone, I saw him. and I probably could have braked sooner idk |
| LOG-0042 | 2026-03-11 09:36 | agent_prompt | PIRRA | P-90 | I hear how frustrating this is. I'm here for how you're doing, not for what happened in the crash — that part is for Sara directly. Right now, is the back getting in the way of anything? |
| LOG-0043 | 2026-03-11 09:44 | client_statement | Maria | — | just can't bend to load the dishwasher. my mom did it |
| LOG-0044 | 2026-03-12 12:00 | agent_prompt | PIRRA | P-31 | First PT session today — anything hurt, feel limited, or get harder during or right after? |
| LOG-0045 | 2026-03-12 12:38 | client_statement | Maria | — | she measured my shoulder, I couldn't get my arm past like shoulder height. it's a 5 now, kind of burning |
| LOG-0046 | 2026-03-12 12:39 | agent_prompt | PIRRA | P-12 | And right now, the back? |
| LOG-0047 | 2026-03-12 12:45 | client_statement | Maria | — | 4. they gave me exercises to do at home |
| LOG-0048 | 2026-03-13 09:00 | agent_prompt | PIRRA | P-10 | Morning, Maria — how are you feeling right now? |
| LOG-0049 | 2026-03-13 09:50 | client_statement | Maria | — | went in for a half day yesterday. standing at the chair was rough by hour 3. today back 5 shoulder 4 |
| LOG-0050 | 2026-03-13 09:51 | agent_prompt | PIRRA | P-11 | Is it getting in the way of anything today? |
| LOG-0051 | 2026-03-13 10:15 | client_statement | Maria | — | not going in today. Dr said light duty and there is no light duty in hygiene lol |
| LOG-0052 | 2026-03-14 18:05 | client_statement | Maria | — | couldn't carry the groceries in. 4 trips with one bag each. embarrassing |
| LOG-0053 | 2026-03-14 18:06 | agent_prompt | PIRRA | P-20 | I'm sorry. Thank you for telling me right when it's happening. How's the back right now? |
| LOG-0054 | 2026-03-14 18:15 | client_statement | Maria | — | 6. and the shoulder woke up too, 5 |
| LOG-0055 | 2026-03-16 09:00 | agent_prompt | PIRRA | P-10 | Morning, Maria — how are you feeling right now? |
| LOG-0056 | 2026-03-16 09:12 | client_statement | Maria | — | good day actually. 3. did my exercises both days |
| LOG-0057 | 2026-03-16 09:13 | agent_prompt | PIRRA | P-11 | Is it getting in the way of anything today? |
| LOG-0058 | 2026-03-16 09:20 | client_statement | Maria | — | no. going to work |
| LOG-0059 | 2026-03-17 12:00 | agent_prompt | PIRRA | P-31 | PT today — anything hurt, feel limited, or get harder during or right after? |
| LOG-0060 | 2026-03-17 13:30 | client_statement | Maria | — | fine. tired. 4 |
| LOG-0061 | 2026-03-18 09:00 | agent_prompt | PIRRA | P-10 | Morning, Maria — how are you feeling right now? |
| LOG-0062 | 2026-03-19 12:00 | agent_prompt | PIRRA | P-31 | PT today — anything hurt, feel limited, or get harder during or right after? |
| LOG-0063 | 2026-03-19 17:00 | agent_prompt | PIRRA | P-40 | No rush, Maria — whenever you have a minute, how are you doing today? |
| LOG-0064 | 2026-03-20 09:00 | agent_prompt | PIRRA | P-10 | Morning, Maria — how are you feeling right now? |
| LOG-0065 | 2026-03-20 13:15 | attorney_communication | Dana R. (paralegal, [Firm Name]) | — | Hi Maria, Dana here — just checking that you're okay. Call or text me any time. |
| LOG-0066 | 2026-03-20 19:48 | client_statement | Maria | — | sorry. my daughter had a stomach thing all week and I was up with her every night. I'm ok. I missed PT thursday. back like a 5, shoulder 4 |
| LOG-0067 | 2026-03-20 19:49 | agent_prompt | PIRRA | P-13 | Glad you're okay. Noted on Thursday. How's the back right now, after a week like that? |
| LOG-0068 | 2026-03-20 19:55 | client_statement | Maria | — | 5. lifting her when she's sick is the worst part |
| LOG-0069 | 2026-03-21 16:20 | client_statement | Maria | — | missed my daughter's recital. couldn't sit that long on those little chairs, stood in the back and then had to leave. cried in the car |
| LOG-0070 | 2026-03-21 16:21 | agent_prompt | PIRRA | P-20 | I'm sorry. Thank you for telling me right when it's happening. How's the back right now? |
| LOG-0071 | 2026-03-21 16:30 | client_statement | Maria | — | 6. sitting is the worst |
| LOG-0072 | 2026-03-23 09:00 | agent_prompt | PIRRA | P-10 | Morning, Maria — how are you feeling right now? |
| LOG-0073 | 2026-03-23 09:18 | client_statement | Maria | — | 4. ok weekend otherwise |
| LOG-0074 | 2026-03-23 10:32 | attorney_communication | Sara Alvarez (your attorney) | — | Maria, it's Sara Alvarez. Dana told me about the recital and I'm sorry. Keep telling PIRRA how you're doing, the good days and the hard ones. And call me any time. |
| LOG-0075 | 2026-03-23 10:40 | client_statement | Maria | — | thank you |
| LOG-0076 | 2026-03-24 12:00 | agent_prompt | PIRRA | P-31 | PT today — anything hurt, feel limited, or get harder during or right after? |
| LOG-0077 | 2026-03-24 12:50 | client_statement | Maria | — | shoulder is better honestly, got my arm higher. 4. back same, 5 |
| LOG-0078 | 2026-03-25 09:00 | agent_prompt | PIRRA | P-10 | Morning, Maria — how are you feeling right now? |
| LOG-0079 | 2026-03-25 09:41 | client_statement | Maria | — | 5. I mean my back's been a thing since I fell off a ladder in 2019 but never like this, that was a week of advil |
| LOG-0080 | 2026-03-25 09:42 | agent_prompt | PIRRA | P-14 | Thanks for telling me. Right now, what does the back stop you from doing that you could do before February? |
| LOG-0081 | 2026-03-25 09:50 | client_statement | Maria | — | everything with her. the bath, the car seat, carrying her up the stairs |
| LOG-0082 | 2026-03-26 12:00 | agent_prompt | PIRRA | P-31 | PT today — anything hurt, feel limited, or get harder during or right after? |
| LOG-0083 | 2026-03-26 14:05 | client_statement | Maria | — | good session. 4 and 4 |
| LOG-0084 | 2026-03-27 09:00 | agent_prompt | PIRRA | P-10 | Morning, Maria — how are you feeling right now? |
| LOG-0085 | 2026-03-27 09:33 | client_statement | Maria (voice note, 0:41, transcript) | — | Hey, it's Maria. Um, today's okay. Back's about a four, shoulder's a three. I slept like five hours which is the most in a while. Still can't lift her, but I did the car seat with my left arm and kind of leaned in, so. Yeah. Okay, bye. |
| LOG-0086 | 2026-03-27 09:33 | system_event | system | — | Media received. Raw audio sealed to vault (vault id 7e21…). Transcript derivative attached to LOG-0085. Speech-to-text provider: contracted, zero-retention. |
| LOG-0087 | 2026-03-30 09:00 | agent_prompt | PIRRA | P-10 | Morning, Maria — how are you feeling right now? |
| LOG-0088 | 2026-03-30 09:27 | client_statement | Maria | — | went back a full day friday and regretted it, 6 by the afternoon. also Patel's office called in a muscle relaxer, started it saturday |
| LOG-0089 | 2026-03-30 09:28 | agent_prompt | PIRRA | P-12 | And right now, the back? |
| LOG-0090 | 2026-03-30 09:35 | client_statement | Maria | — | 5. the relaxer helps at night but I'm foggy in the morning |
| LOG-0091 | 2026-03-31 12:00 | agent_prompt | PIRRA | P-31 | PT today — anything hurt, feel limited, or get harder during or right after? |
| LOG-0092 | 2026-03-31 13:10 | client_statement | Maria | — | ok. 4 and 4 |
| LOG-0093 | 2026-03-31 15:42 | client_statement | Maria | — | some adjuster from the other guy's insurance called asking how I'm doing. I said fine and hung up. was that bad?? |
| LOG-0094 | 2026-03-31 15:43 | agent_prompt | PIRRA | P-50 | That's a question for a person at the firm — I've passed it along and someone will get back to you. How's the back right now? |
| LOG-0095 | 2026-03-31 15:50 | client_statement | Maria | — | its fine. just rattled |
| LOG-0096 | 2026-03-31 16:05 | attorney_communication | Sara Alvarez (your attorney) | — | Maria — Sara. Please don't speak with any insurance adjuster; give them my number, 555-0130, and let them go. I'm calling you in ten minutes. |
| LOG-0097 | 2026-03-31 16:06 | client_statement | Maria | — | ok |
| LOG-0098 | 2026-04-01 09:00 | agent_prompt | PIRRA | P-10 | Morning, Maria — how are you feeling right now? |
| LOG-0099 | 2026-04-01 09:19 | client_statement | Maria | — | shoulder 3, back 5. better than a month ago for sure. still can't pick her up |
| LOG-0100 | 2026-04-01 09:20 | agent_prompt | PIRRA | P-11 | Is it getting in the way of anything today? |
| LOG-0101 | 2026-04-01 09:30 | client_statement | Maria | — | going to work. half day |

## Counts

| | |
|---|---|
| Rows | 101 (counts below are produced by `web/scripts/build-demo-case.py`) |
| client_statement | 47 (46 texts, 1 voice note) |
| agent_prompt | 47, all from the library; zero composed; P-10 opener 13 times |
| attorney_communication | 4 (2 attorney, 2 paralegal) |
| system_event | 3 |
| Scheduled check-ins sent | 13 · answered 11 (Mar 18 and Mar 20 unanswered until the human reach-out) |
| Post-appointment triggers | 7 (1 ortho, 6 PT) · answered 6 (Mar 19 missed session) |
| Client-initiated | 4 (Mar 5, Mar 14, Mar 21, Mar 31) |
| Questions routed to a person | 2 (LOG-0036, LOG-0093) |
| Liability steers | 1 (LOG-0042) |
