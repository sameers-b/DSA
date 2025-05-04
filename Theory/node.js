// Node.js uses an event-driven, non-blocking I/O model powered by the libuv library's
//  event loop implementation. This differs from browser event loops in several key ways.

event loop
// The Node.js event loop consists of six distinct phases that execute in order:

Timers Phase
// Executes callbacks scheduled by setTimeout() and setInterval()

Pending Callbacks Phase
// Executes I/O callbacks deferred from previous cycle
// Handles certain system operations (like TCP errors)

Idle, Prepare Phase (Internal Use)
// Used internally by Node.js for housekeeping

Poll Phase (Most Important Phase)
// Retrieves new I/O events
// Executes I/O-related callbacks (sockets, files)
// May block here waiting for new connections/requests
// Calculates how long it should wait before proceeding

Check Phase
// Executes setImmediate() callbacks immediately after poll phase

Close Callbacks Phase
// Executes socket/handle close events (socket.on('close', ...))