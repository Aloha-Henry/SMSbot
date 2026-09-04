# Reviewer packet — Maria S. demo case — revision 2

Two reviewers, two jobs. Read `thread.md` first, then `timeline.md`. Do not read `protocol.md`
until you have formed a view of the thread; then read it and say whether knowing the library
changes your view.

Counts referenced below are the ones in the Counts table at the foot of `thread.md`, which the
build script checks against the thread. Do not trust a number in this packet over that table.

Answer in writing. Short is fine. "I would not attach this" is a complete answer if you say why.

---

## A. For the personal-injury attorney: is this useful?

You are the plaintiff's lawyer on this file. It is April 1. You have thirty days of this record.

1. **Would you attach a two-page exhibit built from §1–2 of `timeline.md` to a demand?** If yes,
   what would you cut. If no, what is missing.
2. **What does this record tell you about non-economic damages that your intake notes and the
   medical records would not?** Name the three entries you would quote.
3. **Sit with the good days** (LOG-0027, LOG-0056, LOG-0076). More credible to an adjuster or a
   jury, or do you wish they were not there?
4. **The prior condition** (LOG-0084). You learned about a 2019 ladder fall from your own client's
   record rather than from the defense at deposition. Better or worse for you.
5. **The attorney messages** (LOG-0079, LOG-0102). Would you have sent them, and in this thread?
   Does "the good days and the hard ones" read as coaching?
6. **Cadence and feel.** Read Mar 14, Mar 16, Mar 21 and Mar 23 in sequence (LOG-0051 to LOG-0058,
   LOG-0071 to LOG-0078). Does the agent's open invitation and its follow-up two days later feel
   like a conversation your clients would keep having, or still like a form?
7. **The paralegal's Mar 11 message** (LOG-0038) told the client to go to PT. Is that the
   paralegal's call to make in this thread?
8. **What would you pay for this per case**, and does $149 flat change how you would use it?
9. **What is the one thing you would need to see before running it on a live client.**

---

## B. For the independent litigation reviewer: attack it

You are defense counsel, or a neutral asked to think like one. Assume California Superior Court.

### Context

1. Read every `agent_prompt` in sequence. **Is any question leading?** Include P-14 (LOG-0085) and
   the sourced-slot prompts (LOG-0057, LOG-0077, LOG-0106), which quote her earlier words back.
   Is quoting a client her own words a memory aid or a suggestion?
2. The steer at LOG-0041. Neutral redirection, or the firm's tool suppressing a topic? Does the
   fact that LOG-0040 is still in the record change the argument?
3. **The disclosure at LOG-0003** (v4) says "Sara decides whether and how anything in your file is
   used in your case." Revision 1 said "anything in your file may be used in your case." Does either
   formulation mean a statement made with that knowledge lacks the confidentiality §952 requires at
   the moment of communication, or do both describe counsel's discretion, like any client telling a
   lawyer facts the lawyer may later use? Best argument each way, and say whether v4 is better.
4. **§1252.** Statements to a tool provided by the plaintiff's lawyer, after retention, with that
   notice. Make the untrustworthiness argument against the §1250 entries, then say what in this
   record answers it and whether that is enough.
5. The client knows an AI is asking. "She was performing for a machine": how do you make it, how
   do you rebut it?

### Hearsay, California

6. Take **T-22/T-23** (groceries) and **T-30/T-31** (recital). The timeline now says the interval
   between the event and the message is *not stated*. Under §1241, does anything on this record
   qualify? Under §1250, which parts of LOG-0053 and LOG-0073 are then-existing state and which are
   past fact? Are the labels right?
7. **T-12** (LOG-0035) and **T-17** (LOG-0044). Confirm double hearsay under §1201 and say what the
   plaintiff should do with them.
8. **§1237.** For the past-fact entries, what foundation would be needed to read one at trial, and
   does the fact that a fixed library asked the question help or hurt "made when fresh in memory"?
9. **§1271 for the log.** What foundation would you demand from the platform custodian, and where do
   you attack trustworthiness? Does it matter that every agent turn cites a fixed prompt and that
   three turns are validated quotes of the client's own words?
10. If you are the defense, which client statements do you offer under §1220, and does offering
    them open anything under §356?

### Unfavorable entries

11. Assume the plaintiff attaches an exhibit built from §2 of `timeline.md` and later produces the
    full record. Which entries in §6 do you use, and how much do they hurt?
12. The located back series is roughly flat (6 → 5). The shoulder improves (5 → 3). Five days have
    unlocated scores and are off both lines. How do you use each fact?
13. LOG-0099 and LOG-0101: she told your adjuster she was "fine" and told PIRRA "yeah. just rattled"
    eight minutes later, with "4 and 4" earlier that day. Which of you does that help?

### Disclosure scope

14. The firm produces `client_statement` and `agent_prompt` rows, withholds LOG-0038, 0067, 0079,
    0102 (attorney and staff messages) as privileged, and withholds `timeline.md` §3–6 as work
    product. Under §912(a) and §356, what do you move to compel, and what is your best argument
    that the election reached more than the firm intended?
15. Is LOG-0038 (go to PT; call me about closer options) a privileged communication, a business
    communication, or mixed?
16. Is the attorney's disposition on INT-06 opinion work product under CCP §2018.030(a), qualified
    under (b), or neither, given it was written in a vendor's system in response to a vendor's flag?
17. If the court finds the agent prompts and client statements **not privileged** (the AI is not
    "reasonably necessary" under §952), does that finding reach LOG-0079 and LOG-0102? Does it reach
    the client's emails to the firm? Authority if you have it.

### Fidelity

18. Revision 1 of the timeline invented two times, dropped a qualifier, assigned an unlocated score
    to the back, and dated a review receipt before the document it reviewed. Revision 2 fixed those
    and added machine checks. **Find the next one.** Any row in `timeline.md` §1–2 that says more
    than its cited LOG row says.

### The one question that matters

19. **Is a thread like this one more dangerous to the plaintiff than having no record at all?**
    Answer for this thread specifically, and name the entries that drive your answer.

---

## C. What we will do with the answers

Every answer changes one of: the prompt library and selection rules (`protocol.md`), the pathway
labels (`timeline.md` §1), the disclosure text (P-02), the flag taxonomy, the election gating at
export, the fidelity checks in the build script, or the questions we send to California ethics and
evidence counsel. Nothing in the answers is expected to be comfortable.
